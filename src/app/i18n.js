import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
                common: require("../../public/locales/en.json"), // If kept as require
            },
            fr: {
                common: require("../../public/locales/fr.json"), // If kept as require
            },
        },
        ns: ["common"], // Define namespaces (e.g., "common")
        defaultNS: "common", // Set default namespace
        debug: true, // Optional: Debug missing keys
    });

export default i18n;