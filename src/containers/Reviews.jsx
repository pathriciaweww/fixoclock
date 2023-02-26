import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';


const Reviews = () => {
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
          <h2 className={`${styles.titleGradient} ${styles.title}`}>Our Reviews</h2>
          <p className=''>We like to keep our clocks and clients happy, so your opinion matters to us. Feel free to leave a review.</p>
          <h4>What People Are Saying</h4>
        </div>

      </motion.div>
    </div>
  )
}

export default Reviews
