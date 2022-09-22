import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
        <div className="container page">
            <div className="info">
                <h1>Job <span>tracking</span> App</h1>
                <p>
                Jobiapp is a dashboard app that allows you to order and organize your job applications. 
                The app helps you to track your job applications and analyze your last half year. 
                The app can make your searching job journey efficient and clear.
                </p>
                <Link to="/register" className="btn btn-hero">Login/Register</Link>
            </div>
        </div>
    </Wrapper>
  )
};


export default Landing;