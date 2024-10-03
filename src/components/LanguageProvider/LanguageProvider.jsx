import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('es');

    const changeToEnglish = () => {
        setLanguage('en');
    };

    const changeToSpanish = () => {
        setLanguage('es');
    };

    return (
        <LanguageContext.Provider value={{ language, changeToEnglish, changeToSpanish }}>
            {children}
        </LanguageContext.Provider>
    );
};
