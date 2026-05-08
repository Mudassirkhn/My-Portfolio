import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Photo from '../assets/photo2.png';

const Intro = () => {
  return (
    <section id="home" className="pt-36 pb-18">
      <div className="section-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="section-kicker">MERN Developer</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Designing fast, beautiful web products for real users.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-soft sm:text-lg">
              Hi, I am Mudassir Khan. I build scalable full stack applications with MongoDB,
              Express, React, and Node.js, combining clean architecture with modern UI for a
              smooth user experience.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#contact" className="primary-btn">
                Hire Me
              </a>
              <a href="/resume2.pdf" download className="secondary-btn">
                My Resume <FaDownload size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="glass-panel p-5 sm:p-8"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[380px] overflow-hidden rounded-[2rem] border border-white/10">
              <img src={Photo} alt="Mudassir Khan" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#02070c] to-transparent p-5">
                <p className="text-sm text-[#9fb6cc]">Available for freelance and full-time roles</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
