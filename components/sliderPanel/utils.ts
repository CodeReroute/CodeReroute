import { getElementHeight } from '../../utils/elementOperations';
import { logError } from '../../utils/logging';

interface SliderOnClickProps {
    sectionRef: React.RefObject<HTMLDivElement>;
    toggleButton?: {
        buttonText: string;
        toggleButtonRef: React.RefObject<HTMLButtonElement>;
    };
    formSectionRef: React.RefObject<HTMLDivElement>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const sliderOnClick = ({
    sectionRef,
    formSectionRef,
    toggleButton,
    setOpen,
}: SliderOnClickProps) => {
    const formElement = formSectionRef.current;
    if (!sectionRef.current || !formElement) {
        logError(
            `did not work' ${sectionRef.current}, ${formElement}, ${toggleButton?.toggleButtonRef.current},`,
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
        setOpen(false);
        formElement.setAttribute('style', 'height: 0;');
        if (toggleButton && toggleButton.toggleButtonRef.current) {
            toggleButton.toggleButtonRef.current.innerHTML =
                toggleButton.buttonText;
        }
    }
};
