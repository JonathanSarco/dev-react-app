import React from 'react';

import {
    InputStyle,
    InputElementStyle,
    LabelStyle,
    TextAreaElementStyle,
    SelectElementStyle
} from './style';

const input = (props) => {

    let inputElement = null;

    let invalidClass = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        invalidClass = { 
            'backgroundColor': 'salmon',
            'border': '1px solid red'
        };
    }

    switch (props.elementType) {
        case ('input'):
            inputElement =
                <InputElementStyle
                    style={invalidClass}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    />;
            break;
        case ('text'):
            inputElement =
                <TextAreaElementStyle
                    style={invalidClass}
                    {...props.elementConfig}
                    value={props.value} 
                    onChange={props.changed}
                    />;
            break;
        case ('select'):
            inputElement = (
                <SelectElementStyle
                    style={invalidClass}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(optionElement => (
                        <option key={optionElement.value} value={optionElement.value}>
                            {optionElement.displayValue}
                        </option>
                    )
                    )}

                </SelectElementStyle>
            )
            break;
        default:
            inputElement =
                <InputElementStyle
                    {...props.elementConfig}
                    value={props.value} 
                    onChange={props.changed}
                    />;
            break;
    }

    return (
        <InputStyle>
            <LabelStyle>{props.label}</LabelStyle>
            { inputElement}
        </InputStyle>
    )

};


export default input;