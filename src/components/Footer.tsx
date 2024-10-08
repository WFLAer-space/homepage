import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161b22] text-[#8b949e] py-8 mt-16 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 WFLAer.space. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#58a6ff] transition-colors duration-300"><Github size={24} /></a>
          <a href="#" className="hover:text-[#58a6ff] transition-colors duration-300"><Twitter size={24} /></a>
          <a href="#" className="hover:text-[#58a6ff] transition-colors duration-300"><Linkedin size={24} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer