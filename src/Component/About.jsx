import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>
      <motion.section
        className="max-w-6xl mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I’m a frontend developer focused on creating clean, modern, and
          responsive designs using React and TailwindCSS. I love turning
          creative ideas into beautiful web interfaces.
        </p>
        <div>
          {['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git'].map((tech) => (
            <span key={tech} className='px-2 mr-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg leading-[50px]'>
              {tech}
            </span>
          ))}
        </div>
      </motion.section>
    </div>


  )
}

export default About