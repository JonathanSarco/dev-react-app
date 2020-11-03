import React from 'react';

import {
    NavigationItem,
    StyledNavLink
} from './style';

const navigationItem = ({ exact, link, children }) => {
 
    return (
        <NavigationItem>
            <StyledNavLink 
                activeClassName='active'
                exact={exact}
                to={link}>{children}</StyledNavLink>
        </NavigationItem>
    )
}

export default navigationItem;