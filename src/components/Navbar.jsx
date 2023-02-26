import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import {navVariants} from '../utils/motion';
import { useState } from 'react'

const Navbar = () => {

  let Links = [
    {name: "Home",link:"/"},
    {name: "About", link:"/"},
    {name: "Reviews", link:"/"},
    {name: "Contact", link:"/"}
  ];

  const [open, setOpen] = useState(false);

  return (

    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} ${styles.navTop} py-8 relative`}

    >
      <div>
        <div className='grid grid-cols-2 lg:flex lg:items-center lg:justify-between'>

          <div className='font-bold text-[24px] sm:text-[26px]'>
            <a href="#home" alt="logo">Fix O'Clock</a>
          </div>

          <ul className="hidden lg:flex lg:items-center lg:gap-6">
            {
              Links.map((link)=>(
                <li key={link.name} className=''>
                  <a href={link.link} className='hover:text-yellow-grad duration-500'>{link.name}</a>
                </li>
              ))
            }
          </ul>

          <ul className={`${open ? 'order-last h-screen lg:hidden mt-8':'hidden'}`}>
            {
              Links.map((link)=>(
                <li key={link.name} className='mt-4'>
                  <a href={link.link} className='hover:text-yellow-grad duration-500'>{link.name}</a>
                </li>
              ))
            }
          </ul>

          <div className="hidden lg:flex">
            <button className='relative px-6 py-2 group rounded-lg overflow-hidden bg-gradient-to-r from-yellow-grad to-orange-grad text-white'>
            <span className='absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 group-hover:w-full transition-all ease-linear duration-1000 bg-gradient-to-r from-green-500 to-blue-500 left-0 top-0'></span>
            <span className='relative font-bold'>BOOK NOW</span></button>  
          </div>
          
          <div onClick={()=>setOpen(!open)} className='lg:hidden text-3xl cursor-pointer grid justify-items-end'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>

        </div>
      </div>
    </motion.nav>

  )
}

export default Navbar
