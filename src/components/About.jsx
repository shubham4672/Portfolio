import aboutImg from "../assets/aboutMe.gif";
import { ABOUT_TEXT, ABOUT_WEBD } from "../constants";
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-y'>
      <h2 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </h2>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img
              className='rounded-2xl mx-2 w-full lg:w-3/4'
              src={aboutImg}
              alt='about'
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_WEBD}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
