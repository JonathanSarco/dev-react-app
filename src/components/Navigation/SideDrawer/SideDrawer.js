import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import {
    SideDrawer,
    Open,
    Close,
    LogoContainer
} from './style';
import Backdrop from '../../UI/backdrop/Backdrop';

const sideDrawer = ({ open, closed, isAuth }) => {
    return (
        <>
            <Backdrop show={open} clicked={closed}/>
            <SideDrawer style={ open ? Open : Close} onClick={closed}>
                <LogoContainer>
                    <Logo height="3rem"/>
                </LogoContainer>
                <nav>
                    <NavigationItems isAuthenticated={isAuth}/>
                </nav>
            </SideDrawer>
        </>
    );
}

export default sideDrawer;