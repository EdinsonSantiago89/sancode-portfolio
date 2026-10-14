import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-zinc-800 px-8 py-4 flex justify-between items-center"
    >
      <div
        onClick={scrollToTop}
        className="flex items-center space-x-3 cursor-pointer group"
        title="Volver al inicio"
      >
        <span className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">Ξ</span>
        <span className="text-xl font-semibold tracking-tight text-white group-hover:text-red-500 transition-colors">SanCode</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 font-mono text-sm text-zinc-300">
        <a href="#about" className="hover:text-red-600 transition-colors">[ Perfil ]</a>
        <a href="#projects" className="hover:text-red-600 transition-colors">[ Proyectos ]</a>
        <a href="#contact" className="hover:text-red-600 transition-colors">[ Contacto ]</a>
      </div>
    </motion.nav>
  );
}
