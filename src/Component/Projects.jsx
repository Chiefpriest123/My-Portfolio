import React from "react";
import { FolderOpen } from "lucide-react";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col items-center justify-center py-16">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl inline-flex flex-col items-center">
          <FolderOpen size={48} className="text-blue-600 dark:text-sky-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Projects Coming Soon</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            I'm currently working on some exciting projects!  
            Check back later to see my latest work and case studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;