import React from 'react';
import { motion } from 'framer-motion';
import { BiCodeAlt } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import Photo from '../assets/photo2.png';
import Html from '../assets/codinght.png';
import Css from '../assets/css.png';
import JavaScript from '../assets/js.png';
import Express from '../assets/expressjs.png';
import Mongo from '../assets/mongoose.png';
import Tailwind from '../assets/tailwand.png';
import Vscode from '../assets/vscode.png';
import Node from '../assets/nodejs.png';

const cards = [
  {
    title: 'Languages',
    text: 'JavaScript, Node.js, React.js, CSS, HTML and Express.js.',
    icon: BiCodeAlt,
  },
  {
    title: 'Education',
    text: 'MCA - Master of Computer Applications, Integral University, Lucknow.',
    icon: FaGraduationCap,
  },
  {
    title: 'Projects',
    text: 'Built production-focused websites, dashboards, and web applications.',
    icon: MdWork,
  },
];

const techStack = [Html, Css, JavaScript, Express, Mongo, Tailwind, Vscode, Node];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-shell">
        <p className="section-kicker">Introduction</p>
        <h2 className="section-title">About Me</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel overflow-hidden"
          >
            <img src={Photo} alt="profile" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-7"
          >
            <p className="max-w-3xl text-base leading-8 text-soft sm:text-lg">
              I focus on building responsive, secure, and high-performing web applications.
              My process blends scalable backend logic with polished frontend interfaces so
              products feel as good as they perform.
            </p>

            <div className="grid-auto">
              {cards.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="glass-panel card-hover p-5">
                    <Icon size={24} className="text-[#00c2a8]" />
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-soft">{item.text}</p>
                  </article>
                );
              })}
            </div>

            <div className="glass-panel p-5">
              <h3 className="text-xl font-semibold">Tools I work with</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="card-hover rounded-xl border border-white/15 bg-[#132435] p-3">
                    <img src={tech} alt="tech" className="h-8 w-8 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
