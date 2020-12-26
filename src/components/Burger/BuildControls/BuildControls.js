import React from 'react';
import {
    BuildControls,
    OrderButton
} from './style';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
    <BuildControls>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        { controls.map((ctrl) => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}

        <OrderButton
            onClick={() => props.ordered()}
            disabled={!props.purchasable}>{ props.isAuth ? 'Order now!' : 'Sign Up To Order' }</OrderButton>
    </BuildControls>
)

export default buildControls;