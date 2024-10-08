import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import LanguageSwitch from './components/LanguageSwitch'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0d1117] to-[#1d2229] text-[#c9d1d9]">
        <div className="container mx-auto px-4 flex-grow">
          <LanguageSwitch />
          <Header />
          <MainContent />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App