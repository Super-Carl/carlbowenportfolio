import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', hotkey: 'H' },
    { name: 'About', path: '/about', hotkey: 'A' },
    { name: 'Projects', path: '/projects', hotkey: 'P' },
    { name: 'Skills', path: '/skills', hotkey: 'S' },
    { name: 'Contact', path: '/contact', hotkey: 'C' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      role='banner'
    >
      <nav
        className='container-max'
        role='navigation'
        aria-label='Main navigation'
      >
        <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <Link
            to='/'
            className='text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded'
            aria-label='Carl Bowen - Home'
          >
            Carl Bowen
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded ${
                  location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                aria-current={
                  location.pathname === item.path ? 'page' : undefined
                }
              >
                {item.name}
                <span className='sr-only'> (Press {item.hotkey})</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className='md:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
            aria-label='Toggle mobile menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id='mobile-menu'
            className='md:hidden bg-white border-t border-gray-200 shadow-lg'
            role='menu'
          >
            <div className='px-4 py-2 space-y-1'>
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  role='menuitem'
                  aria-current={
                    location.pathname === item.path ? 'page' : undefined
                  }
                >
                  {item.name}
                  <span className='sr-only'> (Press {item.hotkey})</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Keyboard Shortcuts Help - Hidden on mobile for better UX */}
      <div className='hidden xl:block fixed top-20 right-4 bg-white rounded-lg shadow-lg p-4 text-sm text-gray-600 max-w-xs z-40'>
        <h3 className='font-semibold text-gray-900 mb-2'>Keyboard Shortcuts</h3>
        <ul className='space-y-1'>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>H</kbd>{' '}
            Home
          </li>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>A</kbd>{' '}
            About
          </li>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>P</kbd>{' '}
            Projects
          </li>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>S</kbd>{' '}
            Skills
          </li>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>C</kbd>{' '}
            Contact
          </li>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>←→</kbd>{' '}
            Navigate
          </li>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>Space</kbd>{' '}
            Scroll
          </li>
          <li>
            <kbd className='px-1 py-0.5 bg-gray-200 rounded text-xs'>↑↓</kbd>{' '}
            Sections
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
