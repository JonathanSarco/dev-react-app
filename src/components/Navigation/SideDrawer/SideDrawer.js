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

const sideDrawer = ({ open, closed }) => {
    return (
        <React.Fragment>
            <Backdrop show={open} clicked={closed}/>
            <SideDrawer style={ open ? Open : Close}>
                <LogoContainer>
                    <Logo height="3rem"/>
                </LogoContainer>
                <nav>
                    <NavigationItems />
                </nav>
            </SideDrawer>
        </React.Fragment>
    );
}

export default sideDrawer;