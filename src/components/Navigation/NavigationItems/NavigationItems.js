import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import {
    NavigationItems
} from './style';

const navigationItems = ({ isAuthenticated }) => (
    <NavigationItems>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        { !isAuthenticated 
            ? <NavigationItem link="/auth">Authentication</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>

        }
    </NavigationItems>
)

export default navigationItems;