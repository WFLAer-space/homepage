import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitch: React.FC = () => {
  const { isEnglish, toggleLanguage } = useLanguage()

  return (
    <div 
      onClick={toggleLanguage}
      className="fixed top-5 right-5 bg-[rgba(255,255,255,0.1)] px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:shadow-lg z-50"
    >
      <span className="font-bold text-[#c9d1d9] pointer-events-none">
        {isEnglish ? '中文' : 'English'}
      </span>
    </div>
  )
}

export default LanguageSwitch