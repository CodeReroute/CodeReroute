'use client';

import { Colors } from '@/constants/Colors';
import { Paperclip } from 'lucide-react';
import { useState } from 'react';
import styles from './component.module.scss';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    firstName: '',
    lastName: '',
    pronouns: '',
    city: '',
    whyUs: '',
    hearAbout: '',
    portfolio: null as File | null,
    portfolioUrl: '',
    portfolioName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const formDataToSend = new FormData();
    formDataToSend.append('role', formData.role);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('pronouns', formData.pronouns);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('whyUs', formData.whyUs);
    formDataToSend.append('hearAbout', formData.hearAbout);
    formDataToSend.append('portfolio', formData.portfolio as Blob);
    formDataToSend.append('portfolioUrl', formData.portfolioUrl);
    formDataToSend.append('portfolioName', formData.portfolioName);

    console.log('Form submitted:', formDataToSend);

    // TODO: Send form data to backend
    const response = await fetch('/api/submit-application', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = await response.json();
    console.log('Response:', data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
    <div className="w-full mx-auto flex flex-col items-center justify-center h-[300px]">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap gap-4"
      >
        <div className="w-[285px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="WHICH ROLE ARE YOU APPLYING FOR?"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </div>
        <div className="w-[110px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="YOUR EMAIL"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="w-[110px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="FIRST NAME"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="w-[110px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="LAST NAME"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="w-[110px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="PRONOUNS"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.pronouns}
            onChange={(e) =>
              setFormData({ ...formData, pronouns: e.target.value })
            }
          />
        </div>

        <div className="w-[110px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="YOUR CITY"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
        <div className="w-[300px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="WHY DO YOU WANT TO WORK HERE?"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.whyUs}
            onChange={(e) =>
              setFormData({ ...formData, whyUs: e.target.value })
            }
          />
        </div>
        <div className="w-[240px] h-[30px] rounded-md border-2 border-white">
          <input
            type="text"
            placeholder="HOW DID YOU HEAR ABOUT US?"
            className="w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-sm placeholder:font-light placeholder:text-center px-2"
            value={formData.hearAbout}
            onChange={(e) =>
              setFormData({ ...formData, hearAbout: e.target.value })
            }
          />
        </div>
        <div className="w-[200px] h-[30px] rounded-md border-2 flex items-center justify-center border-white">
          <label className="group cursor-pointer w-full">
            <div className="w-full px-2 border-none outline-none flex items-center gap-2 transition-colors">
              {getFileTypeIcon(formData.portfolio)}
              <span className="text-white text-sm font-light truncate">
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
      >
        SUBMIT
      </button>
    </div>
  );
}

/*  */
