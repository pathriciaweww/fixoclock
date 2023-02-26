import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';
import Button from '../components/Button';
import Clock from '../components/Clock';

const Header = () => {

  return (
    <div className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className=''
      >

        <div className='flex flex-col lg:grid lg:grid-cols-3' id='#home'>
          <motion.div
            variants={textVariant(1.1)}
            className={`${styles.heading} lg:grid lg:col-span-1 lg:mt-28`}
          >
            <h1 className={styles.titleGradient}>The Time</h1>
            <h1 className={styles.titleGradient}>is NOW</h1>
          </motion.div>

          <div className='flex items-start justify-start mt-8 lg:grid lg:justify-center lg:items-center lg:col-span-2'>
            <Clock></Clock>
          </div>
          
          
          <div className='mt-8'>
            <motion.div
              variants={textVariant(2)}
            >
              <p className='lg:text-[24px]'>Have your clock assessed free of charge. We’d love to look at your clock whether or not you’d like it to be fixed.</p>
              <div className='mt-8'>
              <Button>CONTACT US</Button>
              </div>
            </motion.div>
          </div>

        </div>



      </motion.div>
    </div>
  )
}

export default Header
