import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { T } from '../theme';
import Button from '../components/Button';
import { useSEO } from '../hooks';
import { NOT_FOUND_SEO } from '../data';
import { ROUTES } from '../router/routes';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  useSEO({
    title: NOT_FOUND_SEO.title,
    description: NOT_FOUND_SEO.description,
    path: location.pathname
  });

  return (
    <section 
      className="min-h-[75vh] flex items-center justify-center px-6 py-12 relative overflow-hidden"
      style={{ backgroundColor: T.ivory }}
    >
      {/* Decorative ambient blur matching the project design */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          backgroundColor: T.accentLight,
          filter: `blur(${T.blur.glow})`,
        }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          backgroundColor: T.accentWarm,
          filter: `blur(${T.blur.glow})`,
        }}
      />

      <div className="max-w-md w-full text-center relative z-10">
        <span 
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase border"
          style={{ 
            backgroundColor: "rgba(140, 107, 62, 0.05)",
            borderColor: "rgba(140, 107, 62, 0.15)",
            color: T.accent 
          }}
        >
          Error 404
        </span>
        <h1 
          className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight" 
          style={{ color: T.charcoal }}
        >
          Page Not Found
        </h1>
        <p 
          className="text-sm md:text-base font-light leading-relaxed mb-10 max-w-sm mx-auto animate-fade-in" 
          style={{ color: T.muted }}
        >
          The page you are looking for does not exist, has been removed, or has had its name changed.
        </p>
        <Link to={ROUTES.HOME} className="inline-block">
          <Button variant="primary">
            Return Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
