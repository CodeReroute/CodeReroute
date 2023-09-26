import React from 'react';
import FormSlider from '../sliderPanel/FormSlider';
import { Input } from '../styles/theme';

const successMessage =
    'Thanks for reaching out! We’ll contact you within 2 business days';

export interface FormFieldsProps {
    sectionRef: React.RefObject<HTMLDivElement>;
    formSectionRef: React.RefObject<HTMLDivElement>;
}

const InquiryFormFields: React.FC<FormFieldsProps> = ({
    sectionRef,
    formSectionRef,
}) => (
    <FormSlider
        name="inquiry-form"
        sectionRef={sectionRef}
        formSectionRef={formSectionRef}
        successMessage={successMessage}
    >
        <Input
            required
            type="text"
            id="name"
            placeholder="first name + last name + pronouns"
        />
        <Input required type="email" id="email" placeholder="email address" />
        <Input
            required
            type="text"
            id="organization"
            placeholder="name of your business/organization"
        />
        <Input
            required
            type="text"
            id="city"
            placeholder="where are you located?"
        />
        <Input
            required
            type="text"
            id="services"
            placeholder="which services are you interested in?"
        />
        <Input
            required
            type="text"
            id="description"
            placeholder="tell us more about you + your business"
        />
    </FormSlider>
);

export default InquiryFormFields;
