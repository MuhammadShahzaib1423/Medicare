import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { Link, NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

const navlinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStickyHeader = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyHeader);
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header flex items-center bg-no-repeat bg-center bg-cover w-full h-[80px] leading-[80px] shadow-md" ref={headerRef}>
      <div className="container max-w-full w-[1440px] px-5 mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="h-10" />
        </div>

        {/* Navigation Menu */}
        <div ref={menuRef} className={`navigation md:flex items-center gap-6 absolute md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="menu flex flex-col md:flex-row items-center gap-6 p-5 md:p-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={({ isActive }) => isActive ? "text-blue-600 text-[16px] font-semibold" : "text-gray-600 text-[16px] font-medium hover:text-blue-800"}>
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right-side elements: Login Button + Menu Icon */}
        <div className="flex items-center gap-4">
        <div >

<Link to='/'>
<figure className='w-[35px] h-[35px] rouned-full'>
  <img src={userImg} alt="Image" className='w-full rouned-full' />
</figure>
</Link>
</div>
          
          {/* Login Button (always visible) */}
          <Link to="/login">
            <button className="bg-blue-600 py-2 px-6 text-white font-semibold h-[44px] rounded-full flex items-center">Login</button>
          </Link>

          {/* Mobile Menu Toggle Button (only on small screens) */}
          <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <BiMenu className="w-8 h-8 text-gray-700" />
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;
