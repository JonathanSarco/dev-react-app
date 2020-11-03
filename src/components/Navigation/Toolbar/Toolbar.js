import React from 'react';
import {
    Toolbar,
    NavContainer
} from './style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <Toolbar >
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height="80%"/>
        <NavContainer>
            <NavigationItems />
        </NavContainer>
    </Toolbar>

);

export default toolbar;