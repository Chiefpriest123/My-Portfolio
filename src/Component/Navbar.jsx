import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react';

const Navbar = ({dark,setDark}) => {
  const [open, setOpen] = useState(false);


  return (
        <motion.nav className='w-full bg-white dark:bg-gray-800 shadow-md fixed top-0 z-50'
        initial={{y: -60 }}
        animate={{y: 0}}
        transition={{ duration: 0.4 }}>

          <div className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
          <Link to='/' className='font-bold text-xl'>
           My Portfolio
          </Link>

          <div className='hidden md:flex gap-6 items-center'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/project'>Project</Link>
            <Link to='/contact'>Contact</Link>

            <button onClick={() => setDark(!dark)} className='p-2 rouned-full bg-gray-100 dark:bg-gray-700'>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

           {/* mobile menu */}

           <button className='md:hidden p-2 rounded-lg' onClick={()=> setOpen(!open)}>
            {open ? <X /> : <Menu />}

           </button>


          </div>

          {open && (
            <motion.div className='md:hidden bg-white dark:bg-gray-800 pborder-t dark:border-gray-700'
            initial={{height: 0}}
            animate={{height: 'auto'}}
            transition={{duration: 0.01}}>
              <div className='flex flex-col items-center gap-4 py-4'>
              <Link to='/' onClick={() => setOpen(false)}>Home</Link>
              <Link to='/about' onClick={() => setOpen(false)}>About</Link>
              <Link to='/project' onClick={() => setOpen(false)}>Project</Link>
              <Link to='/contact' onClick={() => setOpen(false)}>Contact</Link>

              </div>

              <button onClick={() => {setDark(!dark); setOpen(false)}} className='p-2 rouned-full bg-gray-100 dark:bg-gray-700'>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </motion.div>
          )}

        </motion.nav>

    

  )
}

export default Navbar