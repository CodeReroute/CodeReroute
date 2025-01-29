'use client';

import { Colors } from '@/constants/Colors';
import { Paperclip } from 'lucide-react';
import { useState } from 'react';
import styles from './component.module.scss';
import { z } from 'zod';
import ReCaptchaV3, { requestRecaptchaV3Token } from '@/utils/RecaptchaV3';
import { webConfig } from '@/utils/webConfig';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const applicationSchema = z.object({
  role: z.string().min(1, 'Role is required'),
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  pronouns: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  whyUs: z.string().min(1, 'Please tell us why you want to work here'),
  hearAbout: z.string().min(1, 'Please tell us how you heard about us'),
  portfolio: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      'File size must be less than 50MB',
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      'Only PDF and Word documents are accepted',
    )
    .nullable(),
  portfolioUrl: z.string(),
  portfolioName: z.string(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>({
    role: 'a',
    email: 'ahmedashfaq6777@gmail.com',
    firstName: 'ahmed',
    lastName: 'ashfaq',
    pronouns: 'he/him',
    city: 'karachi',
    whyUs: 'i want to work here because i am a good developer',
    hearAbout: 'i heard about it from google',
    portfolio: null as File | null,
    portfolioUrl: '',
    portfolioName: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ApplicationFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Request a ReCaptcha token
      await requestRecaptchaV3Token(async (token) => {
        if (!token) {
          alert('reCAPTCHA verification failed. Please try again.');
          return;
        }

        try {
          // Validate the form data
          const validatedData = applicationSchema.parse(formData);

          // If validation passes, proceed with form submission
          const formDataToSend = new FormData();
          formDataToSend.append('token', token);
          Object.entries(validatedData).forEach(([key, value]) => {
            if (value !== null) {
              formDataToSend.append(key, value);
            }
          });

        

          const response = await fetch(
            `${webConfig.baseUrl}/employment/create`,
            {
              method: 'POST',
              body: formDataToSend,
             /*  headers: {
                'Content-Type': 'multipart/form-data',
              }, */
            },
          );
          console.log(response)

          if (!response.ok) {
            throw new Error('Submission failed');
          }

          // Clear form data on success
          setFormData({
            role: '',
            email: '',
            firstName: '',
            lastName: '',
            pronouns: '',
            city: '',
            whyUs: '',
            hearAbout: '',
            portfolio: null,
            portfolioUrl: '',
            portfolioName: '',
          });
          setSubmitSuccess(true);
        } catch (error) {
          throw error;
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors into a more manageable format
        const fieldErrors: Partial<Record<keyof ApplicationFormData, string>> =
          {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ApplicationFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      }
      console.error('Validation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Clear any existing file errors
      setErrors((prev) => ({ ...prev, portfolio: undefined }));

      // Validate file type and size
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

      setFormData({
        ...formData,
        portfolio: file,
        portfolioName: file.name,
        portfolioUrl: URL.createObjectURL(file),
      });
    }
  };

  const getFileTypeIcon = (file: File | null) => {
    if (!file) return <Paperclip className="w-5 h-5 text-white" />;

    if (file.type.startsWith('image/')) {
      return <Paperclip className="w-5 h-5 text-white" />;
    }

    return <Paperclip className="w-5 h-5 text-white" />;
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center lg:h-[300px]">
      {submitSuccess && (
        <div className="mb-4 text-green-500 font-semibold">
          Application submitted successfully!
        </div>
      )}
      <ReCaptchaV3 />

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap gap-[19px]"
      >
        <div className="w-[290px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="WHICH ROLE ARE YOU APPLYING FOR?"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.role ? 'border-red-500' : ''
              }`}
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </div>
          {errors.role && (
            <span className="text-red-500 text-xs mt-1">{errors.role}</span>
          )}
        </div>

        <div className="w-[110px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="YOUR EMAIL"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.email ? 'border-red-500' : ''
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        <div className="w-[110px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="FIRST NAME"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          {errors.firstName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="w-[110px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="LAST NAME"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          {errors.lastName && (
            <span className="text-red-500 text-[11px] mt-1">
              {errors.lastName}
            </span>
          )}
        </div>

        <div className="w-[110px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="PRONOUNS"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.pronouns ? 'border-red-500 text-xs' : ''
              }`}
              value={formData.pronouns}
              onChange={(e) =>
                setFormData({ ...formData, pronouns: e.target.value })
              }
            />
          </div>
          {errors.pronouns && (
            <span className="text-red-500 text-xs mt-1">{errors.pronouns}</span>
          )}
        </div>

        <div className="w-[110px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="YOUR CITY"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.city ? 'border-red-500' : ''
              }`}
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>
          {errors.city && (
            <span className="text-red-500 text-xs mt-1">{errors.city}</span>
          )}
        </div>

        <div className="w-[300px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="WHY DO YOU WANT TO WORK HERE?"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.whyUs ? 'border-red-500' : ''
              }`}
              value={formData.whyUs}
              onChange={(e) =>
                setFormData({ ...formData, whyUs: e.target.value })
              }
            />
          </div>
          {errors.whyUs && (
            <span className="text-red-500 text-xs mt-1">{errors.whyUs}</span>
          )}
        </div>

        <div className="w-[240px] flex flex-col">
          <div className="h-[45px] rounded-md border-[3.5px] border-white">
            <input
              type="text"
              placeholder="HOW DID YOU HEAR ABOUT US?"
              className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
                errors.hearAbout ? 'border-red-500' : ''
              }`}
              value={formData.hearAbout}
              onChange={(e) =>
                setFormData({ ...formData, hearAbout: e.target.value })
              }
            />
          </div>
          {errors.hearAbout && (
            <span className="text-red-500 text-xs mt-1">
              {errors.hearAbout}
            </span>
          )}
        </div>

        <div className="w-[200px] h-[45px] rounded-md border-[3.5px] flex items-center justify-center border-white">
          <label className="group cursor-pointer w-full">
            <div className="w-full px-2 border-none outline-none flex items-center gap-2 transition-colors">
              {getFileTypeIcon(formData.portfolio)}
              <span
                className="text-white text-sm font-light placeholder:text-[13px] placeholder:text-center
              placeholder:font-[600] px-3 truncate"
              >
                {formData.portfolioName || 'ATTACH PORTFOLIO'}
              </span>
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </form>
      <button
        onClick={handleSubmit}
        className={styles.button}
        style={{ backgroundColor: Colors.Cream, color: Colors.Black }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
      </button>
    </div>
  );
}

/*  */
