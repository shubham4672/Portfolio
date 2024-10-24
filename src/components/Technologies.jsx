import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandJavascript className='text-7xl text-yellow-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className='text-7xl text-cyan-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-7xl text-orange-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMysql className='text-7xl text-blue-400' />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
