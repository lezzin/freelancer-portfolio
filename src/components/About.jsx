import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section
      id="sobre"
      className="bg-bg-card scroll-mt-12 py-12 lg:py-16 mt-12 border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-75 h-75 md:w-112.5 md:h-112.5 bg-green-900/50 rounded-full -z-10 blur-3xl"></div>
          <img
            src="/profile.jpg"
            alt="Leandro Adrian"
            className="relative z-10 w-75 h-75 md:w-112.5 md:h-112.5 object-cover rounded-full border-4 border-green-vibrant/30"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-green-vibrant mb-4">
            <span className="w-6 h-0.5 bg-green-vibrant"></span>
            <span className="text-sm font-medium uppercase tracking-wider text-green-soft">
              Sobre Mim
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quem é <span className="text-green-vibrant">Leandro Adrian?</span>
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed text-sm lg:text-base">
            Sou um desenvolvedor full-stack apaixonado por criar soluções web
            que não apenas parecem incríveis, mas também entregam resultados
            reais para os negócios. Minha abordagem une design sofisticado com
            engenharia de software robusta, garantindo que cada projeto seja
            rápido, acessível e escalável.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-12">
            <div>
              <h4 className="text-3xl font-bold text-green-vibrant mb-2">
                3+
              </h4>
              <p className="text-xs text-gray-500">Projetos Entregues</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-vibrant mb-2">
                2+
              </h4>
              <p className="text-xs text-gray-500">Clientes Felizes</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-vibrant mb-2">2+</h4>
              <p className="text-xs text-gray-500">Anos de Experiência</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#cv"
              className="bg-green-900 border border-green-vibrant/30 text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:bg-green-900/80 transition-all w-fit"
            >
              <span className="font-medium text-sm text-nowrap">Baixar CV</span>
              <div className="w-8 h-8 rounded-full bg-green-vibrant flex items-center justify-center text-black">
                <ArrowRight size={16} />
              </div>
            </a>
            <div className="font-signature text-4xl text-green-soft">
              Leandro Adrian
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
