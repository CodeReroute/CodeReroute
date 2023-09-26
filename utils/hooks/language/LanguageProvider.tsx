import React, { useEffect, useState } from 'react';
import { logError } from '../../logging';

const LANGUAGES: Languages[] = ['es', 'fr', 'en'];
export type Languages = 'es' | 'fr' | 'en';
export const LanguageContext = React.createContext<{
    language: Languages;
    setLanguage: (l: Languages) => unknown;
}>({
    language: 'en',
    setLanguage: () => null,
});

const getLanguageName = (language: Languages) => {
    switch (language) {
        default:
        case 'en':
            return 'ENGLISH';
        case 'es':
            return 'SPANISH';
        case 'fr':
            return 'FRENCH';
    }
};

export const getOtherLanguages = (language: Languages) => {
    const result: { name: string; language: Languages }[] = [];

    for (let index = 0; index < LANGUAGES.length; index++) {
        const lang = LANGUAGES[index];
        if (lang !== language) {
            result.push({
                language: lang,
                name: getLanguageName(lang),
            });
        }
    }

    return result;
};

export const checkLanguage = (lang: string): Languages => {
    switch (lang) {
        case 'fr':
            return 'fr';
        case 'es':
            return 'es';
        // if some other language that we don't support
        default:
            return 'en';
    }
};

const LanguageProvider: React.FC = ({ children }) => {
    const [language, setLanguage] = useState<Languages>('en');
    useEffect(() => {
        const browserLanguage = window?.navigator?.language;
        try {
            setLanguage(checkLanguage(browserLanguage));
        } catch (error) {
            setLanguage('en');
            logError(`Unable to detect browser language: ${browserLanguage}`);
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const LanguageConsumer = LanguageContext.Consumer;

export default LanguageProvider;
