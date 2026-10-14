import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const phrases = [
  'lo que piensas',
  'lo que necesitas',
  'se ejecuta',
  'todo en San Code'
];

// Sub-componente para el efecto typewriter
const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayedText(text.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // Velocidad de tecleo

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <span className="flex items-center whitespace-nowrap">
      <span className="text-zinc-200">{displayedText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="text-vermillion font-bold ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000); // Tiempo total por frase
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-start items-center h-screen px-12 text-white">
      <div className="flex items-center space-x-6">
        {/* Isotipo */}
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">Ξ</span>
          <div className="w-10 h-1 bg-vermillion mt-1"></div>
        </div>

        {/* Brand Name */}
        <span className="text-4xl font-semibold tracking-tight text-white">SanCode</span>

        {/* Animated Bracketed Text */}
        <div className="flex items-center text-4xl font-light h-16">
          <AnimatePresence mode='wait'>
            <motion.div
              key={phrases[index]}
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-vermillion font-bold drop-shadow-[0_0_8px_#E60000] mr-2">[</span>
              <TypewriterText text={phrases[index]} />
              <span className="text-vermillion font-bold drop-shadow-[0_0_8px_#E60000] ml-2">]</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
