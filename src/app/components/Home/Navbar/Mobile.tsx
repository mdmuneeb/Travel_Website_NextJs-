import { navLinks } from '@/app/constants/constants'
import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: ()=>void;
}

const Mobile = ({closeNav, showNav}:Props) => {

  const navOpen = showNav? "translate-x-0" : "translate-x-[-100%]"
  return (
    <div>
    <div className={`fixed ${navOpen} inset-0 tranform transient-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
      
    </div>
    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full tranform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
      {navLinks.map((link)=>{
        return <Link key={link.id} href={link.url}>
          <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] '>
            {link.label}
          </p>
        </Link>
      })}
      <div>
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'></CgClose>
      </div>
    </div>



    </div> 

  )
}

export default Mobile
