import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import { BurgerStyle } from './style';

const burger = (props) => {

    console.log(props.ingredients)
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            const ingredientsArray = [...Array( props.ingredients[igKey] )];

            return ingredientsArray.map( ( _, i ) => {
                console.log('dentro, console', igKey)
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);


    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <BurgerStyle>
            <BurgerIngredient type='bread-top' />
            { transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </BurgerStyle>
    );
};

export default burger;

