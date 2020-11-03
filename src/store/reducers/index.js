
import React from 'react';
import { combineReducers } from 'redux';
import orderReducer from './order';
import burgerBuilderReducer from './burgerBuilder';

const rootReducers = combineReducers({
    burgerBuilderReducer: burgerBuilderReducer,
    orderReducer: orderReducer
});

export default rootReducers;

