import * as actionTypes from '../actions/actionTypes';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.4,
    bacon: 0.7
}

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const addIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
        building: true
    }
};

const removeIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName],
        building: true
    }
}

const setIngredients = (state, action) => {
    return {
        ...state,
        ingredients: action.ingredients,
        error: false,
        totalPrice: 4,
        building: false
    }
};

const fetchIngredientsFailed = (state, action) => {
    return {
        ...state,
        error: true
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);

        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);

        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);

        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);

        default: return state;
    }
}

export default reducer;