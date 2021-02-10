import React, { useEffect, useState } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/button/Button';
import Spinner from '../../components/UI/spinner/spinner';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkValidity } from '../../shared/utility';

import { AuthStyle } from './style';

const Auth = (props) => {
    const [isSignup, setIsSignup] = useState(true);
    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },
    });

    useEffect(() => {
        if (!props.buildingBurger && props.authRedirectPath !== '/' ) {
            props.onSetAuthRedirectPath();
        }
    }, []);

    const inputOnChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...controls,
            [controlName]: {
                ...controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, controls[controlName].validation),
                touched: true
            }
        }
        // this.setState({ controls: updatedControls });
        setControls(updatedControls);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth( controls.email.value, controls.password.value, isSignup );
    };

    const switchAuthHandler = () => {
        setIsSignup(!isSignup);
    };

    const formElementsArray = [];

    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    }

    let form = formElementsArray.map( formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => {inputOnChangeHandler(event, formElement.id) }}
        />
    ));

    if (props.loading) {
        form = <Spinner />
    }

    let errorMessage = null;
    
    if (props.error) {
        errorMessage = (
            <p>{ props.error.message }</p>
        )
    };

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }

    return (
        <AuthStyle>
            { authRedirect }
            { errorMessage }
            <form onSubmit={submitHandler}>
                { form }
                <Button btnType='Success'>SUBMIT</Button>
            </form>
        <Button 
            clicked={switchAuthHandler}
            btnType='Danger'>SWITCH TO { isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
        </AuthStyle>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error,
        isAuthenticated: state.authReducer.token !== null,
        buildingBurger: state.burgerBuilderReducer.building,
        authRedirectPath: state.authReducer.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Auth);