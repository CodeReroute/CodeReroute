import React, { useState } from 'react';
import { trackEvent } from '../../utils/googleAnalytics';
import { StyledButton } from '../shared/ButtonBox';
import { sliderOnClick } from './utils';

interface FormButtonProps {
    name: string;
    buttonText: string;
    hoverColor?: string;
    hoverTextColor?: string;
    backgroundColor?: string;
    sectionRef: React.RefObject<HTMLDivElement>;
    formSectionRef: React.RefObject<HTMLDivElement>;
}

const FormButton: React.FC<FormButtonProps> = ({
    name,
    buttonText,
    sectionRef,
    hoverColor,
    hoverTextColor,
    backgroundColor,
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
        sliderOnClick({
            formSectionRef,
            sectionRef,
            setOpen,
            toggleButton: {
                toggleButtonRef: toggleButton,
                buttonText,
            },
        });
    }, [sectionRef, formSectionRef, toggleButton, buttonText, name]);
    return (
        <StyledButton
            isLight={open}
            hoverColor={hoverColor}
            hoverTextColor={hoverTextColor}
            backgroundColor={backgroundColor}
            onClick={onInquiryClicked}
            ref={toggleButton}
            className="button"
        >
            {open ? 'CLOSE' : buttonText}
        </StyledButton>
    );
};

export default FormButton;
