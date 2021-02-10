import React from 'react';
import {
    ModalStyle
} from './style';
import Backdrop from '../backdrop/Backdrop';

const modal = ({ show, modalClosed, children }) => (
    <React.Fragment>
        <Backdrop show={show} clicked={modalClosed}/>
        <ModalStyle style={{ 
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
        }}>
            { children }
        </ModalStyle>
    </React.Fragment>
);

// With React Memo wrapper, we can check if the props are equal or not to continue with the execution
export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);