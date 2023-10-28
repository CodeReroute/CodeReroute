import React from 'react';
import { RequestStateType } from '../../utils/hooks/useApi';
import { ButtonBox } from '../shared/ButtonBox';
import Loading from '../shared/Loading';
import { darkGray, darkWhite } from '../styles/theme';

interface FormSubmitButtonProps {
    type: RequestStateType;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ type }) => {
    switch (type) {
        default:
        case 'REQUEST_ERROR':
        case 'REQUEST_INIT':
            return (
                <ButtonBox
                    isLight={false}
                    backgroundColor={darkWhite}
                    hoverColor={darkGray}
                    type="submit"
                    id="form-button"
                    className="form-button"
                    text={type === 'REQUEST_ERROR' ? 'Try Again!' : 'SUBMIT'}
                />
            );
        case 'REQUEST_START':
            return <Loading className="loading" />;
        case 'REQUEST_SUCCESS':
            return (
                <div className="form-success">
                    Thanks for reaching out!
                    <br />
                    We’ll contact you within 2 business days
                </div>
            );
    }
};

export default FormSubmitButton;
