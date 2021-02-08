import React, { useState, useEffect } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


const BurgerBuilder = (props, state) => {
    const [purchasable, setPurchasable] = useState(false);

    // state = {
    //     purchasable: false,
    // }

    useEffect(() => {
        props.onInitIngredients();
    });

    const purchaseHandler = () => {
        if (props.isAuthenticated) {
            setPurchasable(true)
            // this.setState({ purchasing: true });
        } else {
            props.onSetAuthRedirectPath('/checkout')
            props.history.push('/auth')
        }
        
    }

    const purchaseCancelHandler = () => {
        // this.setState({ purchasing: false });
        setPurchasable(false);
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchase(); 
        props.history.push('/checkout');
    }

    const updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(el => ingredients[el])
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        return sum > 0;
    }

    // To enabled or disabled the button
    const disabledInfo = {
        ...props.ings
    };

    for (let key in disabledInfo) {
        // Check if it's false or not and assign that value
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null
    let burger = props.error ? <p>Ingredients error</p> : <Spinner />;

    if (props.ings) {
        burger = (
            <>
                <Burger ingredients={props.ings} />
                <BurgerControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={props.price}
                    purchasable={updatePurchasableState(props.ings)}
                    ordered={purchaseHandler}
                    isAuth={props.isAuthenticated}
                />
            </>
        );

        orderSummary = 
            <OrderSummary
                price={props.price ? props.price.toFixed(2) : props.price}
                purchaseCanceled={purchaseCancelHandler}
                purchaseContinued={purchaseContinueHandler}
                ingredients={props.ings} />
    }

    if (state.loading) {
        orderSummary = <Spinner />
    }


    return (
        <React.Fragment>
            <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            { burger}
        </React.Fragment>
    )
}

// Redux

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilderReducer.ingredients,
        price: state.burgerBuilderReducer.totalPrice,
        error: state.burgerBuilderReducer.error,
        isAuthenticated: state.authReducer.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) ( withErrorHandler(BurgerBuilder, axios) ));