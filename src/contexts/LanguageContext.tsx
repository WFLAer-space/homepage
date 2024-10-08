import React, { createContext, useContext, useState } from 'react'
import translations from '../translations'

type LanguageContextType = {
  isEnglish: boolean
  toggleLanguage: () => void
  translations: typeof translations.zh
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  const value = {
    isEnglish,
    toggleLanguage,
    translations: isEnglish ? translations.en : translations.zh,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}