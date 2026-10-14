import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Bienvenido a SanCode. 🚀 ¿Estás de acuerdo si te realizo unas breves preguntas para entender mejor lo que necesitas antes de ponerte en contacto directo con nuestro equipo?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Estados para llevar el flujo del cuestionario inteligente (Lead Qualification)
  const [step, setStep] = useState(1);
  // Step 1: Esperando respuesta a "¿Estás de acuerdo?" (Sí / No)
  // Step 2: Esperando respuesta a "¿Quieres comenzar desde cero o tienes una base?"
  // Step 3: Esperando tipo de proyecto ("¿Qué tipo de proyecto estás pensando en realizar?")
  // Step 4: Cierre y generación del enlace a WhatsApp con resumen.

  const [leadData, setLeadData] = useState({
    consent: '',
    fromScratch: '',
    projectType: ''
  });

  const whatsappNumber = "573194787989";

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    // Añadir mensaje del usuario
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInputValue('');

    // Procesar lógica del flujo según el paso actual
    setTimeout(() => {
      if (step === 1) {
        const lower = userText.toLowerCase();
        if (lower.includes('si') || lower.includes('sí') || lower.includes('claro') || lower.includes('por supuesto') || lower.includes('de acuerdo')) {
          setLeadData(prev => ({ ...prev, consent: 'Sí' }));
          setStep(2);
          setMessages(prev => [
            ...prev,
            { sender: 'bot', text: '¡Excelente! 💡 ¿Te gustaría comenzar el proyecto totalmente desde cero o ya cuentas con una base, diseño o código previo?' }
          ]);
        } else {
          setMessages(prev => [
            ...prev,
            { sender: 'bot', text: 'Entiendo perfectamente. De igual forma, puedes escribirnos directamente a nuestro WhatsApp corporativo y con gusto te atenderemos.' },
            { sender: 'bot', text: 'Haz clic aquí para abrir WhatsApp con nosotros.' }
          ]);
          setStep(4); // Ir directo al cierre
        }
      }
      else if (step === 2) {
        setLeadData(prev => ({ ...prev, fromScratch: userText }));
        setStep(3);
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: 'Perfecto. Cuéntame, ¿qué tipo de proyecto estás pensando en realizar con SanCode? (Ej: Aplicación móvil de cobranza, sistema POS, tienda web, bot de automatización, etc.)' }
        ]);
      }
      else if (step === 3) {
        const finalProject = userText;
        setLeadData(prev => ({ ...prev, projectType: finalProject }));
        setStep(4);

        // Construir el resumen para Edinson
        const summaryText = `Hola Edinson, un cliente completó la asesoría previa en la web de SanCode:\n\n• ¿Comenzar desde cero?: ${leadData.fromScratch}\n• Tipo de proyecto buscado: ${finalProject}\n\nPor favor, ponme en contexto para profundizar más en los requerimientos.`;

        setMessages(prev => [
          ...prev,
          {
            sender: 'bot',
            text: `¡Gracias por la información! 🎯 Según lo que conversamos, estás buscando desarrollar: *${finalProject}* (${leadData.fromScratch.toLowerCase().includes('cero') ? 'Comenzando desde cero' : 'Con base previa'}).`
          },
          {
            sender: 'bot',
            text: 'Para mayor profundidad del proyecto, te atenderá directamente nuestro asesor principal (Edinson Santiago). Haz clic en el botón de abajo para enviarle este resumen a su WhatsApp.'
          }
        ]);
      }
    }, 800);
  };

  const openWhatsAppWithSummary = () => {
    const summaryText = `Hola Edinson, vengo de la web de SanCode y completé la asesoría previa:\n\n• ¿Comenzar desde cero?: ${leadData.fromScratch}\n• Tipo de proyecto: ${leadData.projectType}\n\nQuiero que me des asesoría con mayor profundidad para mi proyecto.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summaryText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ borderColor: 'rgba(230, 0, 0, 0.4)', boxShadow: '0 0 25px rgba(230, 0, 0, 0.1)' }}
        className="max-w-4xl mx-auto border border-red-950/80 bg-zinc-900/40 backdrop-blur-md p-12 rounded-2xl text-center transition-all duration-500"
      >
        <h2 className="text-red-600 text-4xl font-bold mb-6 uppercase tracking-widest italic">
          [ Contacto ]
        </h2>
        <p className="text-zinc-300 text-xl mb-8">
          ¿Tienes algún proyecto en mente? Vamos a ejecutarlo.
        </p>

        {/* Botones de Redes y Chat de WhatsApp */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xl font-mono mb-8">
          <motion.a
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/EdinsonSantiago89"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 bg-black/40 rounded-xl text-white hover:border-red-600 hover:text-red-500 transition-all duration-300"
          >
            [ GitHub ]
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/edinson-santiago-7621ab24a"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 bg-black/40 rounded-xl text-white hover:border-red-600 hover:text-red-500 transition-all duration-300"
          >
            [ LinkedIn ]
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsChatOpen(true)}
            className="px-6 py-3 border border-red-600/60 bg-red-600/10 rounded-xl text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(230,0,0,0.2)] flex items-center space-x-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>[ Asistente & WhatsApp ]</span>
          </motion.button>
        </div>

        {/* Asistente Virtual Inteligente con Cuestionario de Calificación */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden border border-red-900/50 bg-black/90 rounded-2xl p-6 text-left max-w-lg mx-auto shadow-2xl font-mono"
            >
              <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-zinc-200 text-sm font-bold">[ Asistente Virtual SanCode ]</span>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-zinc-500 hover:text-white text-sm"
                >
                  [ cerrar ]
                </button>
              </div>

              {/* Historial del Chat */}
              <div className="h-72 overflow-y-auto space-y-3 p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-sm mb-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-red-600 text-white rounded-br-none'
                        : 'bg-zinc-900 text-zinc-200 rounded-bl-none border border-zinc-800'
                    }`}>
                      <p className="text-xs">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controles de entrada o Botón final de WhatsApp */}
              {step < 4 ? (
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Escribe tu respuesta aquí..."
                    className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-red-600"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openWhatsAppWithSummary}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Resumen a tu WhatsApp (+57 319 478 7989) &rarr;</span>
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
