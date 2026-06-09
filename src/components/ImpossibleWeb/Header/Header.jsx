import React, { useState, useEffect, useRef } from 'react';
import scss from './Header.module.scss';
import { BsList, BsXLg } from 'react-icons/bs';
import DiscountBlock from './DiscountBlock/DiscountBlock';
import { FaWhatsapp } from 'react-icons/fa';
import Navigation from './Navigation/Navigation';

export default function Header({ onHeaderTextLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest(`.${scss.menuToggle}`)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${scss.header} ${isScrolled ? scss.scrolled : ''}`}>
      <div className={scss.container}>
        <div className={scss.logo}>
          <a href='/'>
            impossible<strong>WEB</strong>
          </a>
        </div>

        <Navigation
          navRef={navRef}
          isMenuOpen={isMenuOpen}
          onHeaderTextLinks={onHeaderTextLinks}
          scrollToSection={scrollToSection}
        />

        <button
          className={scss.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Меню'>
          {isMenuOpen ? <BsXLg className={scss.menuIcon} /> : <BsList className={scss.menuIcon} />}
        </button>
      </div>
      {/* <DiscountBlock scrollToSection={scrollToSection} /> */}
    </header>
  );
}
