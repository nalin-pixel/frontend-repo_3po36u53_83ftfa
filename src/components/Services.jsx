import { motion } from 'framer-motion';
import { Target, BarChart2, Zap } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Go-to-market Strategy',
    desc: 'Positioning, messaging, ICP definition, and channel focus to create inevitability in your category.'
  },
  {
    icon: BarChart2,
    title: 'Performance Engine',
    desc: 'Paid + lifecycle systems that compound. Clear KPIs, tight feedback loops, relentless optimization.'
  },
  {
    icon: Zap,
    title: 'Creative System',
    desc: 'Tight creative frameworks and modular assets designed for speed, consistency, and scale.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="flex flex-col gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
            <p className="mt-3 text-slate-600">Clarity creates velocity. We build lean, durable systems that align brand, performance, and product.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <s.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
