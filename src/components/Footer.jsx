import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Atom,
  Smartphone,
  Server,
  Terminal,
  Database,
  FileCode2,
  Wind,
  GitBranch,
  Bot
} from 'lucide-react';

const technologies = [
  { name: 'JavaScript', icon: <Code2 className="w-5 h-5 text-yellow-400" />, color: 'group-hover:border-yellow-400 group-hover:shadow-[0_0_15px_rgba(247,223,30,0.3)]' },
  { name: 'React / Next.js', icon: <Atom className="w-5 h-5 text-cyan-400" />, color: 'group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(97,218,251,0.3)]' },
  { name: 'React Native & Expo', icon: <Smartphone className="w-5 h-5 text-red-500" />, color: 'group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(230,0,0,0.3)]' },
  { name: 'TypeScript', icon: <FileCode2 className="w-5 h-5 text-blue-500" />, color: 'group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(49,120,198,0.3)]' },
  { name: 'Node.js', icon: <Server className="w-5 h-5 text-green-500" />, color: 'group-hover:border-green-500 group-hover:shadow-[0_0_15px_rgba(51,153,51,0.3)]' },
  { name: 'Python', icon: <Terminal className="w-5 h-5 text-blue-400" />, color: 'group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(55,118,171,0.3)]' },
  { name: 'Firebase / SQL', icon: <Database className="w-5 h-5 text-orange-400" />, color: 'group-hover:border-orange-400 group-hover:shadow-[0_0_15px_rgba(255,140,0,0.3)]' },
  { name: 'PHP', icon: <FileCode2 className="w-5 h-5 text-indigo-400" />, color: 'group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(119,123,180,0.3)]' },
  { name: 'Tailwind CSS', icon: <Wind className="w-5 h-5 text-teal-400" />, color: 'group-hover:border-teal-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]' },
  { name: 'n8n & AI Automation', icon: <Bot className="w-5 h-5 text-emerald-400" />, color: 'group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]' },
  { name: 'Git & GitHub', icon: <GitBranch className="w-5 h-5 text-red-500" />, color: 'group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(240,80,50,0.3)]' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 px-12 border-t border-zinc-800 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Stack Tecnológico con Logos Coloridos Actualizado */}
        <div className="text-center space-y-6">
          <h3 className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
            [ Stack Tecnológico & Especialidades ]
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center space-x-2.5 px-4 py-2.5 border border-zinc-800 bg-zinc-950/80 rounded-xl cursor-default transition-all duration-300 ${tech.color}`}
              >
                {tech.icon}
                <span className="text-zinc-300 font-mono text-sm group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separador elegante */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* Parte Legal y Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Marca / Logo */}
          <div
            onClick={scrollToTop}
            className="flex items-center space-x-3 cursor-pointer group"
            title="Volver al inicio"
          >
            <span className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">Ξ</span>
            <span className="text-xl font-semibold tracking-tight text-white group-hover:text-red-500 transition-colors">SanCode</span>
            <span className="text-red-600 font-bold">[ 2026 ]</span>
          </div>

          {/* Enlaces Legales */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400 font-mono">
            <a href="#privacy" className="hover:text-red-600 transition-colors">[ Política de Privacidad ]</a>
            <a href="#terms" className="hover:text-red-600 transition-colors">[ Términos de Uso ]</a>
            <a href="#cookies" className="hover:text-red-600 transition-colors">[ Cookies ]</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-zinc-500 font-mono">
            &copy; {currentYear} Edinson Santiago. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
