import React from 'react';
import PropTypes from 'prop-types';
import { 
    BreadBottom,
    BreadTop,
    Seeds1,
    Seeds2,
    Meat,
    Cheese,
    Salad,
    Bacon
} from './style';

const burgerIngredient = (props) => {
    let ingredient = null;

        switch (props.type) {
            case('bread-bottom'):
                ingredient = <BreadBottom></BreadBottom>;
                break;
            case('bread-top'):
                ingredient = (
                    <BreadTop>
                        <Seeds1></Seeds1>
                        <Seeds2></Seeds2>
                    </BreadTop>
                );
                break;
            case ('meat'):
                ingredient = <Meat></Meat>
                break;
            case ('cheese'):
                ingredient = <Cheese></Cheese>
                break;
            case ('salad'):
                ingredient = <Salad></Salad>
                break;
            case ('bacon'):
                ingredient = <Bacon></Bacon>
                break;
            default:
                ingredient = null;
        }
    return ingredient;
}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;