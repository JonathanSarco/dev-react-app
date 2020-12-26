
import React from 'react';
import { combineReducers } from 'redux';
import orderReducer from './order';
import burgerBuilderReducer from './burgerBuilder';
import authReducer from './auth';

const rootReducers = combineReducers({
    burgerBuilderReducer: burgerBuilderReducer,
    orderReducer: orderReducer,
    authReducer: authReducer
});

export default rootReducers;

