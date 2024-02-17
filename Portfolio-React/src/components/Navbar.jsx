import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log('nav state changed');
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99]' />
      {nav ? (
        <div className='fixed w-full h-screen bg-white flex flex-col items-center justify-start z-20'>
          <a href="#main" className='w-[75%] flex justify-center'>
            <AiOutlineHome size={20} />
            <span className='pl-4'>About Me</span>
            <span className='pl-4'>Resume</span>
            <span className='pl-4'>Portfolio</span>
            <span className='pl-4'>Contact Me</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
