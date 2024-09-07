import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useApi } from '../../utils/hooks/useApi';
import {
    ContentStyles,
    darkBrown,
    darkWhite,
    largerMobileBreakPoint,
    lightGray,
    tabletBreakPoint,
    white,
} from '../styles/theme';
import FormSubmitButton from './FormSubmitButton';
import { requestRecaptchaV3Token } from '../../utils/ReCaptchaV3';

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .form-wrapper {
        height: 0;
        overflow: hidden;
        text-align: center;
        color: ${white};
        transition: all 0.5s ease-in-out;
    }
    form {
        padding: 80px 50px 0 50px;
    }
    .button {
        margin-top: 0;
    }
    .form-fields {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
        row-gap: 30px;
        justify-content: center;
        padding: 0 20px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    .form-button {
        margin-top: 50px;
    }
    .form-success {
        display: inline-block;
        padding: 10px 20px;
        color: ${darkBrown};
        background-color: ${darkWhite};
        margin-top: 50px;
    }
    .loading {
        margin: 68px auto 0 auto;
    }
    @media only screen and (max-width: ${tabletBreakPoint}px) {
        form {
            padding-left: 0;
            padding-right: 0;
        }
        .form-fields {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .form-wrapper {
            padding-top: 0;
            padding-bottom: 0;
            .form-fields {
                grid-template-columns: 1fr;
            }
        }
    }
`;

interface FormSliderProps {
    name: string;
    sectionRef: React.RefObject<HTMLDivElement>;
    formSectionRef: React.RefObject<HTMLDivElement>;
    successMessage: string;
    children: React.ReactNode | React.ReactNode[];
}

const FormSlider: React.FC<FormSliderProps> = ({
    name,
    sectionRef,
    formSectionRef,
    children,
}) => {
    const [requestState, makeRequest] = useApi<unknown>();
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const fields = event.currentTarget.querySelectorAll('input');
            const result: { [key: string]: string } = {};
            fields.forEach((f) => {
                result[f.id] = f.value;
            });
            requestRecaptchaV3Token((captchaToken: string | undefined) => {
                if (captchaToken) {
                    result.recaptcha = captchaToken;
                }
                makeRequest(result);
            });
        },
        [makeRequest],
    );
    return (
        <StyledDiv ref={sectionRef}>
            <ContentStyles ref={formSectionRef} className="form-wrapper">
                <form name={name} onSubmit={handleSubmit}>
                    <div className="form-fields">{children}</div>
                    <FormSubmitButton type={requestState.type} />
                </form>
            </ContentStyles>
        </StyledDiv>
    );
};

export default FormSlider;
