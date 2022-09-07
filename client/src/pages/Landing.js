import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
        <div className="container page">
            <div className="info">
                <h1>Job <span>tracking</span> Ap</h1>
                <p>
                    aliquam vestibulum morbi blandit cursus risus at ultrices 
                    mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis 
                    natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris
                </p>
                <Link to="/register" className="btn btn-hero">Login/Register</Link>
            </div>
        </div>
    </Wrapper>
  )
};


export default Landing;