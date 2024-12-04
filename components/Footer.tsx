"use client";
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <a href="https://www.linkedin.com/in/qasimabdi/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-center text-sm text-gray-400">
          Elite Mentorship © 2024. All Rights Reserved. 
          <a href="#" className="hover:underline ml-2">Terms & Conditions</a> | 
          <a href="#" className="hover:underline ml-2">Privacy Policy</a>
        </p>
      </div>
    </footer>
  )
}

