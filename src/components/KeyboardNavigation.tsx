import React, { useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useNavigate, useLocation } from 'react-router-dom';

interface KeyboardNavigationProps {
  children: React.ReactNode;
}

const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimeoutRef = useRef<number | null>(null);
  const [isScrollingToBottom, setIsScrollingToBottom] = useState(false);

  // Navigation hotkeys
  useHotkeys('h', () => navigate('/'), { preventDefault: true });
  useHotkeys('a', () => navigate('/about'), { preventDefault: true });
  useHotkeys('p', () => navigate('/projects'), { preventDefault: true });
  useHotkeys('s', () => navigate('/skills'), { preventDefault: true });
  useHotkeys('c', () => navigate('/contact'), { preventDefault: true });

  // Left/Right navigation
  useHotkeys(
    'left',
    () => {
      const routes = ['/', '/about', '/projects', '/skills', '/contact'];
      const currentIndex = routes.indexOf(location.pathname);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : routes.length - 1;
      navigate(routes[prevIndex]);
    },
    { preventDefault: true }
  );

  useHotkeys(
    'right',
    () => {
      const routes = ['/', '/about', '/projects', '/skills', '/contact'];
      const currentIndex = routes.indexOf(location.pathname);
      const nextIndex = currentIndex < routes.length - 1 ? currentIndex + 1 : 0;
      navigate(routes[nextIndex]);
    },
    { preventDefault: true }
  );

  // Space bar for scroll to bottom/top
  useHotkeys(
    'space',
    () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (isScrollingToBottom) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsScrollingToBottom(false);
      } else {
        // Scroll to bottom
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        setIsScrollingToBottom(true);

        // Reset after 2 seconds
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrollingToBottom(false);
        }, 2000);
      }
    },
    { preventDefault: true }
  );

  // Up/Down for section navigation
  useHotkeys(
    'up',
    () => {
      const sections = document.querySelectorAll('section');
      const currentScroll = window.scrollY;
      const headerHeight = 80; // Account for fixed header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop - headerHeight;

        if (sectionTop < currentScroll - 50) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;
        }
      }
    },
    { preventDefault: true }
  );

  useHotkeys(
    'down',
    () => {
      const sections = document.querySelectorAll('section');
      const currentScroll = window.scrollY;
      const headerHeight = 80; // Account for fixed header

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop - headerHeight;

        if (sectionTop > currentScroll + 50) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;
        }
      }
    },
    { preventDefault: true }
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return <>{children}</>;
};

export default KeyboardNavigation;
