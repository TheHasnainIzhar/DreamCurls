"use client"

import Link from "next/link";
import "../../styles/layout/navbar.style.css"
import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import "../../styles/main/globals.css"
import "../../styles/main/color.style.css"
import { useEffect, useRef } from "react";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
  });


export default function Navbar(){
  const NavBar = useRef<HTMLDivElement | null>(null);
  const NavButtons = useRef<HTMLDivElement | null>(null);
  const NavLogo = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 52) {
        NavBar.current?.classList.add("nav-active");
      } else {
        NavBar.current?.classList.remove("nav-active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MenuToggle = () => {
      NavButtons.current?.classList.toggle("menu-active")
      NavLogo.current?.classList.toggle("logo-scaling-down")
  }
    return(
        <div className="navbar" ref={NavBar}>
        <div className="nav-content">
          <div className="nav-logo" ref={NavLogo}>
            <span className={`logo-element-1 ${poppins.variable}`}>Dream</span><span className={`logo-element-2 ${poppins.variable}`}>Curls</span>
          </div>
          <div className="nav-buttons" ref={NavButtons}>
            <Link className={`nav-link ${montserrat.variable}`} href={'/'}>Home</Link>
            <Link className={`nav-link ${montserrat.variable}`} href={'/'}>Our Products</Link>
            <Link className={`nav-link ${montserrat.variable}`} href={'/'}>Our Story</Link>
            <Link className={`nav-link ${montserrat.variable}`} href={'/'}>Our Reviews</Link>
          </div>
          <div className="menu-bar" onClick={MenuToggle}>☰</div>
        </div>
      </div>
    );
}