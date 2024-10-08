import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const MainContent: React.FC = () => {
  const { translations } = useLanguage()

  return (
    <main className="flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[rgba(22,27,34,0.8)] p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl backdrop-blur-sm animate-fadeIn">
            <h3 className="text-2xl font-bold text-[#58a6ff] mb-4">{translations[`feature${i}`].title}</h3>
            <p className="text-left mb-4">{translations[`feature${i}`].text}</p>
            <a href="#" className="inline-block bg-[#238636] text-white px-6 py-3 rounded-full font-bold mt-4 transition-all duration-300 hover:bg-[#2ea043] hover:transform hover:scale-105 hover:shadow-lg">
              {translations[`feature${i}`].button}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-16 p-10 bg-[rgba(22,27,34,0.9)] rounded-3xl shadow-2xl animate-fadeIn text-left">
        <h2 className="text-3xl font-bold text-[#58a6ff] mb-8 text-center">{translations.feature4.title}</h2>
        <p className="text-lg leading-relaxed mb-5">{translations.feature4.text}</p>
        <p className="text-lg leading-relaxed mb-5">{translations.feature4.additionalText}</p>
        <p className="text-lg leading-relaxed mb-5">{translations.feature4.finalText}</p>
        <div className="text-right italic text-[#8b949e] mt-8">{translations.founderSignature}</div>
      </div>
    </main>
  )
}

export default MainContent