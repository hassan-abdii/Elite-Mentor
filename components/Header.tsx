"use client"; // Add this at the top of the file

import { useState, useEffect } from 'react'; // Removed 'use'

export default function Header() {
  const [scrollText, setScrollText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollText((prev) => (prev + 1) % 3);
    }, 3000);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollTexts = [
    "KNOWLEDGE - NETWORK - OPPORTUNITY",
    "The #1 Place To Learn Trading",
    "Enroll Now",
  ];

  return (
    <header
      className={`bg-gray-800 py-4 sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">Elite Mentorship</h1>
        <p className="text-lg text-blue-300">{scrollTexts[scrollText]}</p>
      </div>
    </header>
  );
}

