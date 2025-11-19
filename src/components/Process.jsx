import { motion } from 'framer-motion';

const steps = [
  {
    k: '01',
    t: 'Discover',
    d: 'We audit your market, product, and current growth engine to isolate the few levers that matter.'
  },
  {
    k: '02',
    t: 'Design',
    d: 'We map positioning, creative, and channels into a single, measurable system.'
  },
  {
    k: '03',
    t: 'Deploy',
    d: 'We launch with tight loops, iterate fast, and scale what works with discipline.'
  }
];

export default function Process() {
  return (
    <section id="process" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How we work</h2>
            <p className="mt-3 text-slate-600 max-w-md">Minimal overhead, maximum clarity. Senior operators embedded with your team. No noise.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-xs font-medium text-blue-600">{s.k}</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{s.t}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
