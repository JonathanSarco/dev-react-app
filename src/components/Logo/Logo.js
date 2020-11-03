import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import {
    Logo
} from './style';

const logo = (props) => (
    <Logo style={{height: props.height}}>
        <img src={burgerLogo} alt="My burger"/>
    </Logo>
);

export default logo;