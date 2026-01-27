import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section className='pt-24 pb-16 text-center px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white'
    
    initial={{opacity: 0, y: 50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Hi, I'm Daniel Princewill 👋
        </h1>
        <p className='text-lg md:text-xl mb-6'>
            Frontend Developer | React & Tailwind Css Enthusiast
        </p>
        <Link to='/project' className='inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:scale-105 transition'>
            View My Projects
        </Link>
    </motion.section>
  )
}

export default Hero