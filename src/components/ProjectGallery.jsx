import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, Bot, ExternalLink, ShieldCheck, Cpu, Database, BarChart3, ChevronRight, X, Send, Plus, Trash2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Fintech Cobranza Móvil",
    subtitle: "Gestión de Cartera & Cobranza en Terreno",
    category: "Mobile Fintech",
    icon: <Smartphone className="w-5 h-5 text-red-500" />,
    badge: "React Native + Expo 57 + Firebase",
    desc: "Plataforma móvil nativa de alto rendimiento diseñada para la gestión operativa y financiera de cobranzas. Permite seguimiento de deuda, control de mora y registro en tiempo real.",
    highlights: [
      "Geolocalización satelital para trazabilidad de visitas",
      "Métricas analíticas con react-native-chart-kit",
      "Captura de comprobantes vía cámara nativa",
      "Persistencia offline y sincronización con Firebase"
    ],
    techs: ["React Native", "Expo", "Firebase", "Geolocation", "Charts"],
    image: "/images/Aplicacion de cobranza/admin/WhatsApp Image 2026-10-13 at 8.14.44 PM.jpeg"
  },
  {
    id: 2,
    title: "ShopApp Enterprise & POS",
    subtitle: "Gestión Multiempresa, Inventario & Posventa",
    category: "Web & Mobile SaaS",
    icon: <Monitor className="w-5 h-5 text-cyan-400" />,
    badge: "React 19 + TypeScript + Expo Mobile",
    desc: "Ecosistema integral compuesto por panel web administrativo y aplicación móvil de punto de venta. Facilita la creación y administración de empresas, inventario y roles de empleados.",
    highlights: [
      "Control de inventario en tiempo real con escaneo por cámara",
      "Generación de reportes automáticos en PDF y CSV",
      "Control de roles y permisos (administración / empleados)",
      "Impresión térmica móvil de tickets y recibos"
    ],
    techs: ["React 19", "TypeScript", "Tailwind", "Recharts", "jsPDF", "Expo Print"],
    image: "/images/posventa/interfaz web.png"
  },
  {
    id: 3,
    title: "Tecnofrio 212 Web",
    subtitle: "Catálogo Digital Comercial & Conversión",
    category: "Frontend UI/UX",
    icon: <Monitor className="w-5 h-5 text-yellow-400" />,
    badge: "Responsive Web + Catálogo",
    desc: "Portal web corporativo y catálogo digital para empresa del sector de refrigeración industrial y climatización, optimizado para rápida cotización y navegación ágil.",
    highlights: [
      "Catálogo interactivo con categorización de componentes",
      "Diseño responsive adaptable a móviles y tablets",
      "Canales de contacto y asesoría técnica inmediata",
      "Optimización de carga y estructura SEO"
    ],
    techs: ["HTML5", "CSS3 Moderno", "JavaScript", "UI/UX"],
    image: "/images/pagina web/tecnofrio212.png"
  },
  {
    id: 4,
    title: "Willca WhatsApp AI Agent",
    subtitle: "Agente Autónomo Inteligente con n8n & OpenAI",
    category: "Automatización & IA",
    icon: <Bot className="w-5 h-5 text-emerald-400" />,
    badge: "n8n + Meta Cloud API + GPT-4o",
    desc: "Agente conversacional autónomo para WhatsApp con memoria contextual por usuario (`sessionId`), construido con arquitectura n8n, webhooks seguros y modelos de OpenAI.",
    highlights: [
      "Memoria contextual por ventana para conversaciones continuas",
      "Procesamiento inteligente de intenciones con GPT-4o",
      "Webhooks verificados conectados a Meta Graph API",
      "Automatización de atención al cliente y captura de leads 24/7"
    ],
    techs: ["n8n", "Meta Cloud API", "OpenAI GPT-4o", "LangChain", "Webhooks"],
    image: "/images/automatizacion/willca/whatsapp.png"
  }
];

export default function ProjectGallery() {
  const [activeId, setActiveId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estados para simuladores interactivos en el Modal
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: '¡Hola! Soy Willca, tu asistente virtual de WhatsApp. ¿En qué puedo ayudarte hoy con tus consultas o soporte?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const [inventory, setInventory] = useState([
    { id: 1, name: 'Compresor Copeland 1HP', stock: 12, price: '$250.00' },
    { id: 2, name: 'Gas Refrigerante R410A', stock: 45, price: '$85.00' },
    { id: 3, name: 'Tubería de Cobre 3/8"', stock: 30, price: '$42.00' }
  ]);
  const [newItemName, setNewItemName] = useState('');

  const [debtSearch, setDebtSearch] = useState('');
  const [debtResult, setDebtResult] = useState(null);

  const activeProject = projects.find(p => p.id === activeId) || projects[0];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');

    setTimeout(() => {
      let botReply = "¡Entendido! Permíteme registrar tu solicitud y un asesor se pondrá en contacto contigo a la brevedad.";
      const lower = userText.toLowerCase();
      if (lower.includes('hola') || lower.includes('buenos') || lower.includes('buenas')) {
        botReply = "¡Hola! Qué gusto saludarte. ¿Deseas información sobre nuestros servicios o cotizar algún componente?";
      } else if (lower.includes('precio') || lower.includes('costo') || lower.includes('cotiza')) {
        botReply = "Claro que sí. Ofrecemos precios competitivos para proyectos comerciales e industriales. ¿Qué equipo o repuesto necesitas?";
      } else if (lower.includes('soporte') || lower.includes('ayuda') || lower.includes('problema')) {
        botReply = "Nuestro equipo de posventa y soporte técnico está disponible 24/7. ¿Cuál es el número de tu ticket o empresa?";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 1000);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    setInventory(prev => [...prev, { id: Date.now(), name: newItemName, stock: 10, price: '$100.00' }]);
    setNewItemName('');
  };

  const handleCheckDebt = (e) => {
    e.preventDefault();
    if (!debtSearch.trim()) return;
    setDebtResult({
      client: debtSearch.toUpperCase(),
      status: "Mora Activa",
      amount: "$1,450.00",
      dueDate: "15/10/2026",
      daysOverdue: 12
    });
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Título y Presentación */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-600 text-4xl font-bold uppercase tracking-widest italic"
        >
          [ Galería de Proyectos ]
        </motion.h2>
        <p className="text-zinc-400 font-mono text-sm mt-3">
          Arquitectura, desarrollo e implementaciones reales verificadas
        </p>
      </div>

      {/* Selector de pestañas / botones de proyecto */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {projects.map((proj) => {
          const isSelected = activeId === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveId(proj.id)}
              className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
                isSelected
                  ? 'border-red-600 bg-zinc-900/90 shadow-[0_0_20px_rgba(230,0,0,0.25)]'
                  : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 text-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-black/60 border border-zinc-800">
                  {proj.icon}
                </span>
                <span className="text-[10px] font-mono text-red-500 uppercase">
                  {proj.category}
                </span>
              </div>
              <h4 className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                {proj.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Tarjeta Principal Detallada (Showcase Interactivo) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="border border-red-950/80 bg-zinc-950/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Columna Izquierda: Información Detallada */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-red-600/20 text-red-500 border border-red-600/40 text-xs font-mono">
                  [ {activeProject.badge} ]
                </span>

                {/* Botón Ver Demo Interactiva */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-mono font-bold flex items-center space-x-2 shadow-[0_0_15px_rgba(230,0,0,0.4)] transition-all"
                >
                  <span>[ Ver Demo En Vivo ]</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="text-zinc-400 text-sm font-mono mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              <p className="text-zinc-300 text-base leading-relaxed">
                {activeProject.desc}
              </p>

              {/* Puntos Clave de Lógica / Capacidades */}
              <div className="space-y-2.5 pt-2">
                <h5 className="text-xs uppercase font-mono text-zinc-400 tracking-wider">
                  &gt; Capacidades & Lógica Implementada:
                </h5>
                <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-300 font-mono">
                  {activeProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologías usadas */}
              <div className="pt-2 flex flex-wrap gap-2">
                {activeProject.techs.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Simulación Visual & Captura con Marco Profesional */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">

                {/* Barra de cabecera simulada tipo ventana de aplicación */}
                <div className="px-4 py-2.5 bg-black/80 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    <span className="ml-2 text-zinc-400 text-[11px] truncate">{activeProject.title} preview</span>
                  </div>

                  {/* Badge de SanCode con el nuevo logo */}
                  <div className="flex items-center space-x-1.5 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    <img src="/logo.jpeg" alt="Logo" className="w-3.5 h-3.5 rounded-full object-cover" />
                    <span className="text-[10px] text-zinc-300 font-bold">SanCode</span>
                  </div>
                </div>

                {/* Previsualización de Imagen con marco y hover zoom */}
                <div className="relative group aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800 flex items-center space-x-2 text-[11px] font-mono text-zinc-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span>Producción / Verificado</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* MODAL DE DEMO INTERACTIVA EN VIVO */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl border border-red-600/40 bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Cabecera del Modal */}
              <div className="px-6 py-4 bg-black border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="p-2 rounded-lg bg-red-600/20 text-red-500 border border-red-600/40">
                    {activeProject.icon}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-lg">Simulador en Vivo: {activeProject.title}</h3>
                    <p className="text-xs text-zinc-400 font-mono">Demostración interactiva basada en arquitectura real</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contenido Dinámico del Simulador según el Proyecto */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6">

                {/* 1. SIMULADOR WHATSAPP AGENT (WILLCA) */}
                {activeProject.id === 4 && (
                  <div className="space-y-4">
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-zinc-300">Willca AI Agent (Conectado a OpenAI GPT-4o & n8n)</span>
                      </div>

                      {/* Chat box */}
                      <div className="h-64 overflow-y-auto space-y-3 p-3 bg-black/60 rounded-lg border border-zinc-800 font-mono text-sm">
                        {chatMessages.map((msg, index) => (
                          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-xl ${msg.sender === 'user' ? 'bg-red-600 text-white rounded-br-none' : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'}`}>
                              <p className="text-xs">{msg.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Input de chat */}
                      <form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Escribe un mensaje al agente de WhatsApp..."
                          className="flex-1 bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-red-600"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-mono text-sm font-bold flex items-center space-x-1 transition-colors"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* 2. SIMULADOR SHOPAPP & POS (INVENTARIO) */}
                {activeProject.id === 2 && (
                  <div className="space-y-4 font-mono">
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-300">&gt; Control de Inventario Multiempresa</span>
                        <span className="text-xs px-2.5 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded">Modo POS Activo</span>
                      </div>

                      {/* Lista de inventario */}
                      <div className="space-y-2">
                        {inventory.map((item) => (
                          <div key={item.id} className="flex justify-between items-center bg-black/60 border border-zinc-800 p-3 rounded-lg text-xs">
                            <div>
                              <p className="text-white font-bold">{item.name}</p>
                              <p className="text-zinc-400">Stock: {item.stock} unidades</p>
                            </div>
                            <div className="text-right">
                              <span className="text-emerald-400 font-bold">{item.price}</span>
                              <button
                                onClick={() => setInventory(inventory.filter(i => i.id !== item.id))}
                                className="ml-3 text-zinc-500 hover:text-red-500"
                              >
                                <Trash2 className="w-4 h-4 inline" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Formulario agregar producto */}
                      <form onSubmit={handleAddProduct} className="flex gap-2 pt-2">
                        <input
                          type="text"
                          value={newItemName}
                          onChange={(e) => setNewItemName(e.target.value)}
                          placeholder="Nombre del nuevo producto..."
                          className="flex-1 bg-black border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Agregar</span>
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* 3. SIMULADOR FINTECH COBRANZA MÓVIL */}
                {activeProject.id === 1 && (
                  <div className="space-y-4 font-mono">
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-300">&gt; Consulta de Deuda en Terreno</span>
                        <span className="text-xs px-2.5 py-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded">Geolocalización Activa</span>
                      </div>

                      <form onSubmit={handleCheckDebt} className="flex gap-2">
                        <input
                          type="text"
                          value={debtSearch}
                          onChange={(e) => setDebtSearch(e.target.value)}
                          placeholder="Ingrese nombre del cliente o cédula..."
                          className="flex-1 bg-black border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-red-600"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold"
                        >
                          Consultar
                        </button>
                      </form>

                      {debtResult && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-black/80 border border-red-950 rounded-xl space-y-2 text-xs">
                          <div className="flex justify-between"><span className="text-zinc-400">Cliente:</span><span className="text-white font-bold">{debtResult.client}</span></div>
                          <div className="flex justify-between"><span className="text-zinc-400">Estado:</span><span className="text-red-500 font-bold">{debtResult.status}</span></div>
                          <div className="flex justify-between"><span className="text-zinc-400">Monto Vencido:</span><span className="text-emerald-400 font-bold">{debtResult.amount}</span></div>
                          <div className="flex justify-between"><span className="text-zinc-400">Días de Mora:</span><span className="text-yellow-400 font-bold">{debtResult.daysOverdue} días</span></div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {/* 4. TECNOFRIO 212 WEB */}
                {activeProject.id === 3 && (
                  <div className="space-y-4 font-mono text-center py-6">
                    <h4 className="text-xl font-bold text-white">Catálogo Industrial Tecnofrio 212</h4>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto">
                      Plataforma comercial optimizada para la cotización rápida de repuestos y sistemas de refrigeración industrial.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                      {['Compresores Copeland', 'Gases Refrigerantes', 'Tuberías de Cobre', 'Reguladores', 'Valvulería'].map((prod, idx) => (
                        <div key={idx} className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200">
                          {prod}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Pie del Modal */}
              <div className="px-6 py-4 bg-black border-t border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-500">
                <span>SanCode Interactive Core v2.5</span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                >
                  Cerrar Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
