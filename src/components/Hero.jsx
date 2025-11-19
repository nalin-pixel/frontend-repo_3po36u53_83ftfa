import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="pt-28 pb-20 flex flex-col items-start gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 max-w-3xl"
          >
            Build marketing campaigns that feel inevitable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl"
          >
            We craft minimal, high-impact systems that turn attention into growth. Strategy-first. Data-informed. Beautifully executed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="flex items-center gap-3"
          >
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">Start a project</a>
            <a href="#services" className="inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium border border-slate-200 hover:border-slate-300 transition-colors">How we work</a>
          </motion.div>

          <div className="mt-6 flex items-center gap-6 text-slate-500">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm">Minimalist. Precise. Outcome-driven.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
