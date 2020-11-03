import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/button/Button';
import {
    CheckoutSummaryStyle
} from './style';

const checkoutSummary = (props) => {
    return (
        <CheckoutSummaryStyle>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                btnType='Danger'
                clicked={props.checkoutCancelled}>Cancel</Button>
            <Button 
                btnType='Success'
                clicked={props.checkoutContinued}>Success</Button>
        </CheckoutSummaryStyle>
    )
}

export default checkoutSummary;