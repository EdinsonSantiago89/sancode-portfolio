export default function Portfolio() {
  const projects = [
    { title: 'Automatización de Tareas', desc: 'Desarrollo de scripts para optimizar procesos operativos.', demo: '#', code: '#' },
    { title: 'Gestión de BD', desc: 'Administración de bases de datos de alta disponibilidad.', demo: '#', code: '#' },
    { title: 'Aplicación Web', desc: 'Despliegue de aplicación web responsiva y optimizada.', demo: '#', code: '#' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-zinc-900 dark:text-zinc-100 mb-12 text-center">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">{project.desc}</p>
              <div className="flex gap-4">
                <a href={project.demo} className="text-vermillion hover:underline">Ver Demo</a>
                <a href={project.code} className="text-vermillion hover:underline">Ver Código</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
