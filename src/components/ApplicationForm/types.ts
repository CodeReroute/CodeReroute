import { z } from 'zod';

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const applicationSchema = z.object({
  jobId: z.string().min(1, 'Id is required'),
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  pronoun: z.string(),
  city: z.string().min(1, 'City is required'),
  whyWorkWithUs: z.string().min(1, 'Please tell us why you want to work here'),
  hearAboutUs: z.string().min(1, 'Please tell us how you heard about us'),
  resume: z
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
  experience: z.string(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export interface BaseResponse {
  success: boolean;
  message?: string;
  error?: string;
}
