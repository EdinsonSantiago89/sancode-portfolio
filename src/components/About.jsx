import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { title: 'Soporte y Tecnologías', desc: 'Mantenimiento, parametrización y soporte técnico integral.' },
    { title: 'Bases de Datos', desc: 'Gestión, administración y modelado de bases de datos relacionales y no relacionales.' },
    { title: 'Aplicaciones Web y Escritorio', desc: 'Despliegue y configuración avanzada de soluciones de software.' }
  ];

  return (
    <section id="about" className="py-20 px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-600 text-4xl font-bold mb-16 uppercase tracking-widest italic text-center"
        >
          [ Acerca de mí ]
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 border border-zinc-700 bg-zinc-900/30 backdrop-blur-md rounded-2xl hover:border-red-600 transition-all duration-300"
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                <span className="text-red-600">[</span> {skill.title} <span className="text-red-600">]</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
