import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';
import Button from '../components/Button';


const Footer = () => {

  const links = [
    {name:'Home', link:'/'},
    {name:'About', link:'/'},
    {name: 'Reviews', link:'/'},
    {name:'Contact', link:'/'}
  ]

  const footerLinks = links.map(link =>{
    return <li className='p-4'>{link.name}</li>
  })

  return (
    <div className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className=''
      >

        <div className='flex flex-col justify-center items-center'>
          <a href="#" alt="logo">Fix O'Clock</a>
          <ul className='flex'>{footerLinks}</ul>
        </div>

      </motion.div>
    </div>
  )
}

export default Footer
