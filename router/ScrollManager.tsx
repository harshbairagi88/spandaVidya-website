import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef<string>(pathname);

  useEffect(() => {
    // If we changed pathnames and there is no hash, scroll to top instantly
    if (!hash && prevPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    prevPathname.current = pathname;
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      
      const scrollToElement = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try scrolling immediately
      if (!scrollToElement()) {
        // Retry with delays to support lazy loading, slow renders, and transitions
        const timers = [
          setTimeout(scrollToElement, 50),
          setTimeout(scrollToElement, 150),
          setTimeout(scrollToElement, 300),
          setTimeout(scrollToElement, 600),
        ];

        return () => {
          timers.forEach(clearTimeout);
        };
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
