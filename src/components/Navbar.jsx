import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Logo from "../assets/myLogo.png";

const Navbar = () => {
  return (
    <nav className='mb-16 flex items-center justify-between my-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-12' src={Logo} alt='Logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
