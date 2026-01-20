import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Weather App",
    description:
      "A real-time weather application that displays current weather conditions using a public API.",
    tech: "HTML • CSS • JavaScript",
    live: "weather-web-pi-mocha.vercel.app",
    github: "https://github.com/Chiefpriest123/Weather-Web",
  },
  {
    title: "Crypto App",
    description:
      "Work In Progress",
    tech: "HTML • CSS • JavaScript",
    live: "crypto-broker-three.vercel.app",
    github: "https://github.com/Chiefpriest123/Crypto-Broker",
  },
  {
    title: "TO-DO list",
    description:
      "A sleek, functional To-Do List application built with vanilla web technologies. This project focuses on clean UI/UX and efficient task management using local storage.",
    tech: "HTML • CSS • JavaScript",
    live: "https://chiefpriest123.github.io/To-Do-List/Todo.html",
    github: "https://github.com/Chiefpriest123/To-Do-List",
  },
  {
    title: "E-commerce Website",
    description:
      "still in progress",
    tech: "React • Tailwind CSS",
    live: "In Progress",
    github: "https://github.com/Chiefpriest123/3legant",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my skills, projects, and experience.",
    tech: "React • Tailwind CSS",
    live: "my-portfolio-bice-theta-38.vercel.app",
    github: "https://github.com/Chiefpriest123/My-Portfolio",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-7 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <p className="text-sm font-medium text-blue-600 dark:text-sky-400">
                {project.tech}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <Github size={16} /> GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
