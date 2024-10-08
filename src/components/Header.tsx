import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Header: React.FC = () => {
  const { translations } = useLanguage()

  return (
    <header className="flex flex-col items-center mb-16 animate-fadeIn">
      <img src="https://vip.123pan.cn/1816233029/9392276" alt="WFLAer.space Logo" className="w-32 h-32 mb-5 rounded-full object-cover animate-pulse shadow-lg" />
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#58a6ff] to-[#1f6feb] bg-clip-text text-transparent shadow-sm">{translations.title}</h1>
        <p className="text-2xl text-[#8b949e] mt-2 animate-slideInRight">{translations.subtitle}</p>
      </div>
    </header>
  )
}

export default Header