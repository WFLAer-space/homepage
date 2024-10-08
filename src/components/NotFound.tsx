import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const NotFound: React.FC = () => {
  const { translations } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <header className="mb-16 animate-fadeIn">
        <img src="https://vip.123pan.cn/1816233029/9392276" alt="WFLAer.space" className="w-32 h-32 mx-auto mb-5 rounded-full animate-pulse" />
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#4a90e2] to-[#63f5ef] bg-clip-text text-transparent shadow-sm">404 Not Found</h1>
          <p className="text-2xl text-[#b3b3b3] mt-2 animate-slideInRight">{translations.notFoundSubtitle}</p>
        </div>
      </header>
      <p className="text-xl mb-8 animate-fadeIn">{translations.notFoundMessage}</p>
      <Link to="/" className="inline-block bg-gradient-to-r from-[#4a90e2] to-[#63f5ef] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg animate-fadeIn">
        {translations.returnHome}
      </Link>
    </div>
  )
}

export default NotFound