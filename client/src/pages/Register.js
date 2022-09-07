import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  };

const Register = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState);
    const { 
        isLoading, 
        showAlert, 
        displayAlert,
        user,
        setupUser
    } = useAppContext();

    const toggelMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        };
        const currentUser = { name, email, password };
        if (isMember) {
            setupUser({
                currentUser,
                endPoint: 'login', 
                alertText: 'Login successful! Redirecting...'
            })
        } else {
            setupUser({
                currentUser,
                endPoint: 'register', 
                alertText: 'User created successfully! Redirecting...'
            })
        }
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [user, navigate])

  return (
    <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
            <h3>{ values.isMember ? 'Login' : 'Register' }</h3>
            { showAlert && <Alert/>}

            {/* NAME INPUT */}
            { !values.isMember && (
                <FormRow 
                type="text" 
                name='name' 
                value={values.name} 
                handleChange={handleChange}
            />
            ) }

            {/* EMAIL INPUT */}
            <FormRow 
                type="email" 
                name='email' 
                value={values.email} 
                handleChange={handleChange}
            />
            {/* PASSWORD INPUT */}
            <FormRow 
                type="password" 
                name='password' 
                value={values.password} 
                handleChange={handleChange}
            />
            <button 
                type="submit" 
                className="btn btn-block"
                disabled={isLoading}>
                    Submit
            </button>
            <p>
                { values.isMember ? 'Not a member yet?' : 'Already a member?' }
                <button 
                    className="member-btn" 
                    type="button" 
                    onClick={toggelMember}>
                        { values.isMember ? 'Register' : 'Login'}
                </button>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register;