import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mentes em Flash",
      category: "Sistema Web",
      image: "src/assets/projects/01/01.webp",
      gallery: [
        "src/assets/projects/01/02.png",
        "src/assets/projects/01/03.png",
        "src/assets/projects/01/04.png",
      ],
      description:
        "Plataforma própria para comercialização de flashcards, com integração direta à Hotmart para gestão de pagamentos e afiliados.",
      github: "https://github.com/lezzin",
      link: "http://mentesemflash.com/",
    },
    {
      title: "Erupção das Letras",
      category: "Sistema Web",
      image: "src/assets/projects/02/01.webp",
      gallery: [
        "src/assets/projects/02/02.png",
        "src/assets/projects/02/03.png",
        "src/assets/projects/02/04.png",
      ],
      description:
        "Rede social para autores e leitores, com foco em publicação e apoio financeiro de obras.",
      github: "https://github.com/lezzin",
      link: "https://erupcaodasletras.com.br/",
    },
    {
      title: "TaskFlow",
      category: "Sistema Web",
      image: "src/assets/projects/03/01.webp",
      gallery: [
        "src/assets/projects/03/02.png",
        "src/assets/projects/03/03.png",
        "src/assets/projects/03/04.png",
      ],
      description:
        "Rede social para autores e leitores, com foco em publicação e apoio financeiro de obras.",
      github: "https://github.com/lezzin",
      link: "https://erupcaodasletras.com.br/",
    },
  ];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="projetos"
        className="relative scroll-mt-12 bg-bg-main py-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center gap-3"
          >
            <div className="flex items-center gap-2 text-green-vibrant">
              <span className="w-6 h-0.5 bg-green-vibrant" />
              <span className="text-sm font-medium uppercase tracking-wider text-green-soft">
                Portfólio
              </span>
              <span className="w-6 h-0.5 bg-green-vibrant" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold">
              Projetos <span className="text-green-vibrant">Recentes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.button
                type="button"
                key={index}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-2xl cursor-pointer border border-white/5 bg-bg-card p-4 text-left transition-colors hover:border-green-vibrant/50"
              >
                <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center justify-between px-2">
                  <div>
                    <p className="mb-1 text-xs font-medium text-green-soft">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:bg-green-vibrant group-hover:text-black">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0c] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition hover:border-white/20 hover:bg-black/70"
              >
                <X size={18} />
              </button>

              <div className="max-h-[90vh] overflow-y-auto">
                <div className="aspect-16/8 w-full overflow-hidden bg-white/5">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-green-soft">
                      {selectedProject.category}
                    </p>

                    <h3 className="mb-4 text-2xl font-bold md:text-4xl">
                      {selectedProject.title}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-white/70 md:text-base">
                      {selectedProject.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                      >
                        <Github size={17} />
                        GitHub
                      </a>

                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-green-vibrant px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                      >
                        <ExternalLink size={17} />
                        Ver projeto
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                      Mais imagens
                    </h4>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      {selectedProject.gallery.map((photo, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-2xl border border-white/8 bg-white/5"
                        >
                          <img
                            src={photo}
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="w-full aspect-video object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
