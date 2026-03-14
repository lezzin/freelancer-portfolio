import { Star } from "lucide-react";
import { motion } from "motion/react";

export const Feedbacks = () => {
  const feedbacks = [
    {
      image: '/feedbacks/mauricio.jpg',
      name: "Mauricio G.",
      role: "Fundador, Erupção das Letras",
      text: "O Leandro é solícito e confiável. Tem boa capacidade de pesquisar tanto quanto criar suas próprias soluções.",
    },
    {
      name: "Rafael C.",
      role: "Cliente 99Frelas",
      text: "Muito eficiente e muito rápido nas alterações! Recomendo!",
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
      id="feedbacks"
      className="py-12 lg:py-16 scroll-mt-12 max-w-7xl mx-auto px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-12 gap-4"
      >
        <div className="flex items-center gap-2 text-green-vibrant">
          <span className="w-6 h-0.5 bg-green-vibrant"></span>
          <span className="text-sm font-medium uppercase tracking-wider text-green-soft">
            Depoimentos
          </span>
          <span className="w-6 h-0.5 bg-green-vibrant"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          O que dizem os <span className="text-green-vibrant">clientes</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {feedbacks.map((feedback, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="bg-bg-card p-8 rounded-2xl border border-white/5 hover:border-green-vibrant/30 transition-colors flex flex-col h-full"
          >
            <div className="flex gap-1 mb-6 text-green-vibrant">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 italic mb-8 flex-1 text-sm leading-relaxed">
              "{feedback.text}"
            </p>
            <div className="flex items-center gap-4">
              {feedback?.image ?
                <img src={feedback.image} className="w-12 h-12 rounded-full" />
                :
                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center font-bold text-green-vibrant">
                  {feedback.name.charAt(0)}
                </div>
              }
              <div>
                <h5 className="font-bold text-white text-sm">
                  {feedback.name}
                </h5>
                <p className="text-xs text-gray-500">{feedback.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
