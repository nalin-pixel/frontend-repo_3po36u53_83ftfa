import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm" />
            <span className="text-slate-900 font-semibold tracking-tight">Northgrid Consulting</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#process" className="hover:text-slate-900 transition-colors">Approach</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="md:hidden text-slate-700">
            <Menu size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
