import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from '.';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-blue-dark' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-blue-dark'>Zaina</span></h1>
          <p className={`${styles.heroSubText} mt-2text-white-100`}>"I'm a full-stack software developer, a mathematics enthusiast with a keen interest in machine learning.</p>
        </div>  
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero


  