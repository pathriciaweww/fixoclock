import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';
import Button from '../components/Button';

const Contact = () => {
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
          <h2 className={`${styles.titleGradient} ${styles.title}`}>Contact Us</h2>
          <p className=''>Should you have any queries, please feel free to contact us!</p>
          <form className='grid gap-2 w-1/2'>
            <input type="text" name="name" placeholder="Please enter your name*" required/>
            <input type="text" name="name" placeholder="Email address*" required/>
            <textarea name="message" rows="7" placeholder="Your Message*" required></textarea>
            
          </form>
          <div className=''>
            <Button>SEND</Button>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default Contact
