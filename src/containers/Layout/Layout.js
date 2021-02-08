import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Main } from './style';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);


    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
        // this.setState( { showSideDrawer: false } );
    }

    const sideDrawerToggleHandler = () => {
        // this.setState( ( prevState ) => {
        //     return { showSideDrawer: !prevState.showSideDrawer };
        // } );
        setShowSideDrawer(!showSideDrawer);
    }
    return (
        <>
            <Toolbar 
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
                isAuth={props.isAuthenticated}
                open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            <Main>{ props.children }</Main>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.token !== null
    };
};

export default connect(mapStateToProps) (Layout);