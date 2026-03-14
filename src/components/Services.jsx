import { Layout, Code2, ArrowRight, Settings } from "lucide-react";
import { motion } from "motion/react";

export const Services = () => {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Desenvolvimento Web",
      desc: "Sistemas web rápidos, responsivos e escaláveis utilizando as melhores tecnologias do mercado.",
    },
    {
      icon: <Layout size={24} />,
      title: "APIs & Integrações",
      desc: "Desenvolvimento de backends robustos e integração com serviços de terceiros.",
    },
    {
      icon: <Settings size={24} />,
      title: "Ajuda técnica e manutenção",
      desc: "Suporte contínuo para garantir que seu site funcione bem e esteja sempre atualizado.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="serviços"
      className="py-12 lg:py-16 max-w-7xl scroll-mt-12 mx-auto px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
      >
        <div>
          <div className="flex items-center gap-2 text-green-vibrant mb-4">
            <span className="w-6 h-0.5 bg-green-vibrant"></span>
            <span className="text-sm font-medium uppercase tracking-wider text-green-soft">
              Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-vibrant">Serviços</span> que Ofereço
          </h2>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="bg-bg-card p-8 rounded-2xl border border-white/5 hover:border-green-vibrant/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-vibrant mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              {service.desc}
            </p>
            <a
              href="#"
              className="text-green-vibrant text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all"
            >
              Saiba mais <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
