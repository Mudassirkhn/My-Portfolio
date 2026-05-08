import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing skills, projects, and direct contact flow with a modern React experience.',
    link: 'https://linktr.ee/mudassirkhn',
  },
  {
    id: 2,
    title: 'Task Management System',
    description:
      'A full task workflow app to create, manage, and track tasks efficiently with a production-style architecture.',
    link: 'https://task-management-system-1-huxo.onrender.com/',
  },
  {
    id: 3,
    title: 'CRUD Project',
    description:
      'A focused CRUD web app for creating, reading, updating, and deleting records with fast React UI.',
    link: 'https://crud-project-kdni.onrender.com/',
  },
  {
    id: 4,
    title: 'Weather App',
    description:
      'A real-time weather app based on city/location input using React and OpenWeatherMap API integration.',
    link: 'https://live-weatherr-appp.netlify.app/',
  },
  {
    id: 5,
    title: 'BookStore',
    description:
      'A complete MERN bookstore with authentication, cart, wishlist, order management, and admin controls.',
    link: 'https://bookstore-wj9e.onrender.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-shell">
        <p className="section-kicker">Portfolio</p>
        <h2 className="section-title">Selected Projects</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="glass-panel card-hover flex flex-col p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-soft">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center rounded-full border border-[#00c2a8]/60 px-4 py-2 text-sm font-semibold text-[#7ef0dd] transition hover:bg-[#00c2a8] hover:text-[#072027]"
              >
                View Project
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
