import React from 'react';
import {
    Backdrop
} from './style';


const backdrop = ({ show, clicked }) => (
    show ? <Backdrop onClick={clicked}></Backdrop> : null
);

export default backdrop;