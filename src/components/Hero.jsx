// import { motion } from "framer-motion";
import Resume from "../assets/shubham's_resume.pdf";
import profilePic from "../assets/kevinRushProfile.jpg";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-14 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl'>
              Shubham Sharma
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-3xl'>
              Frontend Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </p>
            <a
              download=''
              href={Resume}
              className='button bg-transparent px-5 border-slate-600 border-2 py-3 rounded-lg'
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 p-6'>
          <div className='flex justify-center'>
            <img src={profilePic} alt='Shubham Sharma' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
