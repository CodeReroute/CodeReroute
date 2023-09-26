import React, { useState } from 'react';
import { getElementHeight } from '../../utils/elementOperations';
import { trackEvent } from '../../utils/googleAnalytics';
import { logError } from '../../utils/logging';
import { StyledButton } from '../shared/ButtonBox';

interface FormButtonProps {
    name: string;
    buttonText: string;
    sectionRef: React.RefObject<HTMLDivElement>;
    formSectionRef: React.RefObject<HTMLDivElement>;
}

const FormButton: React.FC<FormButtonProps> = ({
    name,
    buttonText,
    sectionRef,
    formSectionRef,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleButton = React.useRef<HTMLButtonElement>(null);
    const onInquiryClicked = React.useCallback(() => {
        trackEvent({
            action: 'ButtonClicked',
            category: 'button',
            label: name,
            value: 1,
        });
        const formElement = formSectionRef.current;
        if (!sectionRef.current || !formElement || !toggleButton.current) {
            logError(
                `did not work' ${sectionRef.current}, ${formElement}, ${toggleButton.current},`,
            );
            return;
        }
        if (formElement.offsetHeight === 0) {
            const height = getElementHeight(formElement, sectionRef.current);
            formElement.setAttribute('style', `height: ${height}px;`);
            setOpen(true);
            setTimeout(() => {
                formElement.querySelector('input')?.focus();
            }, 500);
        } else {
            formElement.setAttribute('style', 'height: 0;');
            toggleButton.current.innerHTML = buttonText;
            setOpen(false);
        }
    }, [sectionRef, formSectionRef, toggleButton, buttonText, name]);
    return (
        <StyledButton
            isLight={open}
            onClick={onInquiryClicked}
            ref={toggleButton}
            className="button"
        >
            {open ? 'CLOSE' : buttonText}
        </StyledButton>
    );
};

export default FormButton;
