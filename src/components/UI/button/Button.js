import React from 'react';
import {
    CustomButton
} from './style';


const button = ({ btnType, clicked, children, disabled }) => (
    <CustomButton
        style={!disabled ? { color: btnType === "Success" ? "#5C9210" : "#944317" } : null}
        onClick={clicked}
        disabled={disabled}>{children}</CustomButton>
);

export default button;