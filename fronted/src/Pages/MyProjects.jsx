import React from "react";
import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React MongoDB, Express.js, React, and Node.js WhatsApp clone. It showcases my skills, projects, and contact information.",
      link: "https://linktr.ee/mudassirkhn",
    },
    {
      id: 2,
      title: "Task Management System ",
      description: "A comprehensive task management system that allows users to create, manage, and track tasks efficiently. Built with React.js and Node.js.",
      link: "https://task-management-system-1-huxo.onrender.com/",
    },
    {
      id: 3,
      title: "CRUD Project",
      description: "A simple CRUD application built with React.js, allowing users to create, read, update, and delete items.",
      link: "https://crud-project-kdni.onrender.com/",
    },
    {
      id: 4,
      title: "Weather App",
      description: "A sleek weather forecasting app that fetches real-time weather data based on user location or city name, using React.js and OpenWeatherMap API.",
      link: "https://live-weatherr-appp.netlify.app/",
    },
  ];

  return (
    <div className="bg-black py-24 px-6 min-h-screen text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center underline underline-offset-8 decoration-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-black transition-all duration-300 font-semibold"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
