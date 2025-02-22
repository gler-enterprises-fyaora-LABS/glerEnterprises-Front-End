import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en.json';
import fr from '../public/locales/fr.json';

// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        lng: "en", // Default language
        fallbackLng: "en", // Fallback language
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
        resources: {
            en: {
                common: en, // Using ES6 imports
            },
            fr: {
                common: fr, // Using ES6 imports
            },
        },
        ns: ["common"], // Define namespaces (e.g., "common")
        defaultNS: "common", // Set default namespace
        debug: true, // Optional: Debug missing keys
    });

export default i18n;