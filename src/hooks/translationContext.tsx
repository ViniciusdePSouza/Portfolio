import { createContext, ReactNode, useContext, useState } from 'react'


interface TranslateProviderProps {
    children: ReactNode
}

interface TranslateContextProps {
    language: string;
    translateWebSite: (language: string) => string
}
export const TranslateContext = createContext({} as TranslateContextProps)

function TranslateProvider({ children } :TranslateProviderProps ) {
    const [language, setLanguage] = useState('pt-br')

    function translateWebSite(language: string) {
        setLanguage(language)
        return language
    }

    return <TranslateContext.Provider value={{language, translateWebSite}}>
        {children}
    </TranslateContext.Provider>
}

function useTranslation() {
    const context = useContext(TranslateContext)

    return context
}

// eslint-disable-next-line react-refresh/only-export-components
export {TranslateProvider, useTranslation}