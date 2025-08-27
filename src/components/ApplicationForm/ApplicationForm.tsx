'use client';

import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import styles from './ApplicationForm.module.scss';
import ReCaptchaV3, { requestRecaptchaV3Token } from '@/utils/RecaptchaV3';
import { webConfig } from '@/utils/webConfig';
import { FormInput } from './FormInput';
import { FileUpload } from './FileUpload';
import { z } from 'zod';
import {
  ApplicationFormData,
  applicationSchema,
  BaseResponse,
  MAX_FILE_SIZE,
  ACCEPTED_FILE_TYPES,
} from './types';

export default function ApplicationForm({ id }: { id: string }) {
  const [portfolioName, setPortfolioName] = useState('');
  const [response, setResponse] = useState<BaseResponse | null>();
  const [formData, setFormData] = useState<ApplicationFormData>({
    jobId: id,
    email: '',
    firstName: '',
    lastName: '',
    pronoun: '',
    city: '',
    whyWorkWithUs: '',
    hearAboutUs: '',
    experience: '',
    resume: null,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ApplicationFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setResponse(null);
    setIsSubmitting(true);

    try {
      // Validate form data before proceeding with submission
      const validationResult = applicationSchema.safeParse(formData);

      if (!validationResult.success) {
        handleSubmitError(validationResult.error);
        return; // Stop submission if validation fails
      }

      await requestRecaptchaV3Token(async (token) => {
        if (!token) {
          setResponse({
            success: false,
            error: 'reCAPTCHA verification failed. Please try again.',
          });
          return;
        }

        try {
          const formDataToSend = new FormData();

          Object.entries(validationResult.data).forEach(([key, value]) => {
            if (value !== null) {
              formDataToSend.append(key, value);
            }
          });

          const response = await fetch(
            `${webConfig.baseUrl}/employment/create?token=${token}`,
            {
              method: 'POST',
              body: formDataToSend,
            },
          );

          const data = await response.json();

          if (response.ok) {
            handleSubmitSuccess();
          } else {
            setResponse({
              success: false,
              error: data.message || 'Something went wrong. Please try again.',
            });
          }
        } catch (error) {
          setResponse({
            success: false,
            error: 'Unable to submit your application. Please try again.',
          });
          return;
        }
      });
    } catch (error) {
      setResponse({
        success: false,
        error: 'Unable to submit your application. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitSuccess = () => {
    setResponse({
      success: true,
      message: 'Application submitted successfully!',
    });
    setFormData({
      jobId: '',
      email: '',
      firstName: '',
      lastName: '',
      pronoun: '',
      city: '',
      whyWorkWithUs: '',
      hearAboutUs: '',
      resume: null,
      experience: '',
    });
  };

  const handleSubmitError = (error: unknown) => {
    if (error instanceof z.ZodError) {
      const fieldErrors: Partial<Record<keyof ApplicationFormData, string>> =
        {};
      error.errors?.forEach((err) => {
        const field = err.path[0] as keyof ApplicationFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
    }
    console.error('Validation error:', error);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrors((prev) => ({ ...prev, portfolio: undefined }));

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        portfolio: 'Only PDF and Word documents are accepted',
      }));
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        portfolio: 'File size must be less than 50MB',
      }));
      return;
    }

    setFormData({ ...formData, resume: file });
    setPortfolioName(file.name);
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center lg:mt-20 lg:h-[300px]">
      <ReCaptchaV3 />

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap gap-[19px]"
      >
        <FormInput
          name="email"
          placeholder="YOUR EMAIL"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          error={errors.email}
          className="w-[110px]"
        />

        <FormInput
          name="firstName"
          placeholder="FIRST NAME"
          value={formData.firstName}
          onChange={(value) => setFormData({ ...formData, firstName: value })}
          error={errors.firstName}
          className="w-[110px]"
        />

        <FormInput
          name="lastName"
          placeholder="LAST NAME"
          value={formData.lastName}
          onChange={(value) => setFormData({ ...formData, lastName: value })}
          error={errors.lastName}
          className="w-[110px]"
        />

        <FormInput
          name="pronoun"
          placeholder="PRONOUNS"
          value={formData.pronoun}
          onChange={(value) => setFormData({ ...formData, pronoun: value })}
          error={errors.pronoun}
          className="w-[110px]"
        />

        <FormInput
          name="city"
          placeholder="YOUR CITY"
          value={formData.city}
          onChange={(value) => setFormData({ ...formData, city: value })}
          error={errors.city}
          className="w-[110px]"
        />

        <FormInput
          name="whyWorkWithUs"
          placeholder="WHY DO YOU WANT TO WORK HERE?"
          value={formData.whyWorkWithUs}
          onChange={(value) =>
            setFormData({ ...formData, whyWorkWithUs: value })
          }
          error={errors.whyWorkWithUs}
          className="w-[270px]"
        />

        <FormInput
          name="hearAboutUs"
          placeholder="HOW DID YOU HEAR ABOUT US?"
          value={formData.hearAboutUs}
          onChange={(value) => setFormData({ ...formData, hearAboutUs: value })}
          error={errors.hearAboutUs}
          className="w-[240px]"
        />

        <FileUpload
          onFileChange={handleFileChange}
          fileName={portfolioName}
          file={formData.resume}
          className="w-[210px]"
        />
      </form>

      <button
        onClick={handleSubmit}
        className={styles.button}
        style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
      </button>

      {response && (
        <div
          className="mr-auto mt-[-70px] font-semibold uppercase"
          style={{ color: response.success ? '#D0F29B' : '#FF5757' }}
        >
          {response.success ? response.message : response.error}
        </div>
      )}
    </div>
  );
}
