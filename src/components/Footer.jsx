import { motion } from "motion/react";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 border-t border-white/5 text-center text-sm text-gray-500 bg-bg-main mt-12"
    >
      <p>
        © {new Date().getFullYear()} Leandro Adrian. <br className="md:hidden md:flex-none"/><br className="md:hidden md:flex-none"/> Todos os direitos
        reservados.
      </p>
    </motion.footer>
  );
};
