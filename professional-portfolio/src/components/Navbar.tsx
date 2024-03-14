import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { NavLink, navLinks } from '../constants';
import { logo, close } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
        to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
        >
        <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
        <p className='text-white text[18px] font-bold cursor-pointer flex'>Zaina Qasim&nbsp;<span className='sm:block hidden'>|&nbsp;Software&nbsp;Engineer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          
          {
            navLinks.map((link: NavLink) =>(
            <li
            key={link.id}
            className={`${
            active === link.title
            ? 'text-white'
            : 'text-secondary'}
            hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>setActive(link.title)}>
            <a href={`#${link.id}`}>{link.title}</a>
            </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={ close }
               alt='menu'
               className={`w-[18px] h-[18px] object-contain cursor-pointer ${!toggle ? 'rotate-45' : ''} transition-all`}
               onClick={() => setToggle(!toggle)}
               />
               <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-10 right-0 my-2 min-[140px] z-10 rounded-xl`}>
               <ul className='list-none flex justify-end items-end flex-col gap-2'>
                {
                  navLinks.map((link: NavLink) =>(
                  <li
                  key={link.id}
                  className={`${
                  active === link.title
                  ? 'text-white'
                  : 'text-secondary'}
                  font-poppins font-medium cursor-pointer bg-black rounded-full p-2 w-32 justify-end flex`}
                  onClick={()=>{
                    setToggle(!toggle);
                    setActive(link.title);
                    }}>
                  <a href={`#${link.id}`} className='flex items-center text-[16px]'>{link.title}<span className='material-symbols-outlined bg-primary p-2 rounded-full text-2xl'>{link.icon}</span></a>
                  </li>
                  ))
                }
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

