import React from 'react';
import { motion } from 'framer-motion';
import backend from '../assets/backend.png';
import Fronted from '../assets/Fronted.png';
import debug from '../assets/debug.png';
import fullstack from '../assets/FullStack.png';
import Hosting from '../assets/Hosting.png';

const services = [
  { icon: Fronted, title: 'Front End Development' },
  { icon: backend, title: 'Back End Development' },
  { icon: Hosting, title: 'Deployment & Hosting Setup' },
  { icon: fullstack, title: 'Bug Fixing & Optimization' },
  { icon: debug, title: 'Full Stack Product Development' },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="section-shell">
        <p className="section-kicker">What I Offer</p>
        <h2 className="section-title">Services Built Around Growth</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-soft sm:text-lg">
          From idea to launch, I build reliable web solutions tailored to your goals with
          clean code, maintainable architecture, and thoughtful user experience.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel card-hover p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#123247]">
                <img src={item.icon} alt={item.title} className="h-6 w-6 object-contain" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-soft">
                End-to-end implementation with clean delivery, clear communication, and
                business-focused outcomes.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
