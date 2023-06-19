import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './../style';
import ComputerCanvas from './canvas/Computers';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 bottom-10`}
      >
        <div className="flex justify-content items-start">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              {"Hi, I'm"} <span className="text-[#917eff]"> Chandan</span>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3d visual, user <br className="sm:block hidden" />{' '}
                interfaces and web development.
              </p>
            </h1>
          </div>
        </div>
      </div>
      <ComputerCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" rel="noopener noreferrer">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full mb-1 bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
