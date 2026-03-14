import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Serviços", "Projetos", "Feedbacks", "Sobre", "Contato"];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-bg-card/90 backdrop-blur-md border border-white/5  px-6 py-4 flex justify-between items-center shadow-2xl ${isOpen ? "rounded-t-3xl" : "rounded-full"}`}
      >
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          <div className="w-8 h-8 rounded-full bg-green-900 text-green-vibrant flex items-center justify-center text-sm">
            L
          </div>
          Adrian
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#home" className="text-green-vibrant">
            Home
          </a>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden md:block bg-green-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-800 transition-colors border border-green-vibrant/20"
        >
          Me Contrate
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-20 left-1/2 -translate-x-1/2 w-[95%] z-40 bg-bg-card/95 backdrop-blur-md border border-white/5  p-6 shadow-2xl md:hidden flex flex-col gap-4 ${isOpen ? "rounded-b-3xl rounded-t-none" : "rounded-full"}`}
          >
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-green-vibrant font-medium text-lg"
            >
              Home
            </a>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white font-medium text-lg transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-green-900 text-white px-6 py-3 rounded-full font-bold text-center hover:bg-green-800 transition-colors border border-green-vibrant/20"
            >
              Me Contrate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
