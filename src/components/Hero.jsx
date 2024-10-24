import { motion } from "framer-motion";
import Resume from "../assets/shubham's_resume.pdf";
import profilePic from "../assets/DALL·E 2024-10-24 17.52.16 - A professional front-facing image of a young man sitting at a desk using a laptop. The setting should appear modern and minimalist, with a focus on th.webp";
import { HERO_CONTENT } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const button = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0.1)}
              initial='hidden'
              animate='visible'
              className='pb-14 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl'
            >
              Shubham Sharma
            </motion.h1>
            <motion.span
              variants={container(0.6)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-3xl'
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              download=''
              href={Resume}
              variants={button(1.8)}
              initial='hidden'
              animate='visible'
              className='button bg-transparent px-5 border-slate-600 border-2 py-3 rounded-lg'
              whileHover={{ scale: 1.03 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 p-6'>
          <div className='flex justify-center'>
            <motion.img
              src={profilePic}
              alt='Shubham Sharma'
              width={480}
              height={660}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className='rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
