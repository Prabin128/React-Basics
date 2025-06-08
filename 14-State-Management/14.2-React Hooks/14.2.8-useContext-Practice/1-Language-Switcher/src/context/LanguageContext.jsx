import { createContext, useState } from "react"; 

// Create the context
export const LanguageContext = createContext();

// Create the provider component
const LanguageProvider = ({children})=>{
    const [language, setLanguage] = useState('en'); //default in English

    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider