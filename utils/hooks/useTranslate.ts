import { useCallback, useContext } from 'react';
import en from '../../locale/en.json';
import fr from '../../locale/fr.json';
import es from '../../locale/es.json';
import { logError } from '../logging';
import { LanguageContext } from './language/LanguageProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const index = (obj: any, i: any) => obj[i];
type TranslateFunction = (
    key: string,
    option?: { [key: string]: string },
) => string;
type Options = {
    [key: string]: string | number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
const translate = (key: string, object: object, options?: Options) => {
    let result: string = key
        .split('.')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce(index, object as any);
    if (options) {
        Object.keys(options).forEach((option) => {
            result = result.replace(
                new RegExp(`{{ ${option} }}|{{${option}}}`),
                options[option].toString(),
            );
        });
    }
    return result;
};

export const useTranslate = (): TranslateFunction => {
    const { language } = useContext(LanguageContext);

    const t = useCallback(
        (key: string, options?: Options): string => {
            let object;
            switch (language) {
                case 'fr':
                    object = fr;
                    break;
                case 'es':
                    object = es;
                    break;

                default:
                    object = en;
                    break;
            }
            try {
                return translate(key, object, options);
            } catch (error) {
                logError(
                    `Unable to translate ${key} - missing key in ${language.toUpperCase()}`,
                );
                return translate(key, en, options);
            }
        },
        [language],
    );
    return t;
};
