import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Logo from "../assets/myLogo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className='mb-16 flex items-center justify-between my-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-12' src={Logo} alt='Logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a
          href='https://www.linkedin.com/in/shubham4672/'
          target='_blank'
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href='https://github.com/shubham4672'
          target='_blank'
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href='
        https://www.instagram.com/_i.shubham/'
          target='_blank'
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href='https://x.com/XShubhamS'
          target='_blank'
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaSquareXTwitter />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
