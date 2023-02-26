import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';


const Projects = () => {
  return (
    <div className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className=''
      >

        <div className='grid grid-cols-3'>
          <h2 className={`${styles.titleGradient} ${styles.title} col-start-1 col-span-3`}>Projects</h2>
          <div className='col-start-1 col-end-1 bg-slate-300'>box</div>
          <div className='col-start-2 col-span-2 bg-gray-800'>desc box</div>
          <div className='col-span-1 bg-red-400'>box1</div>
          <div className='bg-red-100'>box2</div>
          <div className='bg-red-600'>box3</div>
        </div>

      </motion.div>
    </div>

  )
}

export default Projects
