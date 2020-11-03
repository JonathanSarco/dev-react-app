import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import {
    NavigationItems
} from './style';

const navigationItems = () => (
    <NavigationItems>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </NavigationItems>
)

export default navigationItems;