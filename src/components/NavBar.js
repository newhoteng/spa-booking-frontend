import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < breakpoint ? <MobileNav /> : <DesktopNav />;
};

export default NavBar;
