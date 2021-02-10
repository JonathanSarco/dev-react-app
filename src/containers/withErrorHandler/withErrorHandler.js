import React from 'react';
import Modal from '../../components/UI/modal/Modal'
import useHttpErrorHanlder from '../../hooks/http-error-handler';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return (props) => {
        const [error, clearError] = useHttpErrorHanlder(axios);

        return (
            <>
                <Modal 
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </>
        );
    }
}

export default withErrorHandler;