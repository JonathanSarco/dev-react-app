import React, { useEffect } from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions/index';
import Spinner from '../../components/UI/spinner/spinner';

const Orders = (props) => {
    useEffect(() => {
        props.onFetchOrders(props.token, props.userId);
    }, [props.token, props.userId]);
    
    let orders = <Spinner />;
    if (!props.loading) {
        orders = props.orders.map(order => (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
            />
        ))
    }
    return (
        <>
            {orders}
        </>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        token: state.authReducer.token,
        userId: state.authReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actionTypes.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));