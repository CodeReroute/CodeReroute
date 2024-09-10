import React from 'react';
import { FormFieldsProps } from '../inquiry/InquiryFormFields';
import FormSlider from '../sliderPanel/FormSlider';
import { Input } from '../styles/theme';

const successMessage =
    'Thanks for reaching out! We’ll contact you within 2 business days';

const EmploymentFormFields: React.FC<FormFieldsProps> = (props) => (
    <FormSlider
        {...props}
        name="employment-form"
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
            id="skills"
            placeholder="what are your most prominent skills?"
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
            id="work-with-us"
            placeholder="why do you want to work with us?"
        />
        <Input
            required
            type="text"
            id="bipoc"
            placeholder="where did you hear about us?"
        />
    </FormSlider>
);

export default EmploymentFormFields;
