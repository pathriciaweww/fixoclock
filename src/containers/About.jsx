import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';

const About = () => {
  return (
    <div className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className=''
      >

        <div className='grid sm:grid-cols-2'>

          <div className='order-last sm:order-first'>
            image
          </div>

          <div className='grid grid-rows-3 grid-flow-col'>
            <h2 className={`${styles.titleGradient} ${styles.title} col-span-2`}>About Us</h2>
            <div className='flex'>
              <h3 className={styles.subTitle}>Services</h3>
              <h3 className={styles.subTitle}>Our Story</h3>
            </div>
            <p className='grid col-span-2'>We repair and restore all kinds of clocks<br/>
              from any time period. From antique,<br/>
              wind-up, mechanical clocks to modern<br/>
              battery-powered timepieces.</p>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default About
