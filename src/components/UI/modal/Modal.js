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

export default modal;