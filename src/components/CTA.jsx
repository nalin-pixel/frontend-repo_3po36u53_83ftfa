import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Tell us about your next move</h3>
              <p className="mt-2 text-slate-600">Two sentences is enough. We’ll reply within 24 hours.</p>
              <form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="col-span-2 w-full rounded-xl border border-slate-300 bg-white/70 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition" placeholder="What are you trying to achieve?" />
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition-colors shadow-sm">Send</button>
              </form>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:justify-self-end"
            >
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
