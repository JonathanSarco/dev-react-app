import React from 'react';

import {
    BuildControl,
    ButtonControl,
    Label,
} from './style';


const buildControl = (props) => (
    <BuildControl>
        <Label>{ props.label }</Label>
        <ButtonControl 
            backColor='#D39952' 
            hoverColor='#DAA972' 
            onClick={props.removed} 
            disabled={props.disabled}>Less</ButtonControl>
        <ButtonControl 
            backColor='#8F5E1E' 
            hoverColor='#99703F' 
            onClick={props.added}>More</ButtonControl>
    </BuildControl>
)

export default buildControl;