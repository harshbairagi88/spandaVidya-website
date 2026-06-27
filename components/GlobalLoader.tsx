import React from 'react';
import { T } from '../theme';

export const GlobalLoader: React.FC = () => {
  return (
    <div 
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ 
        backgroundColor: `${T.ivory}d8`, 
        backdropFilter: 'blur(6px)',
        transition: `all ${T.transitions.duration} ${T.transitions.easing}`
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Pulsing ring matching SpandaVidya styling */}
        <div 
          className="relative w-12 h-12 rounded-full border-2"
          style={{ 
            borderColor: T.accent, 
            borderWidth: '2.5px',
            animation: 'pulse 2s ease-in-out infinite' 
          }}
        >
          <div 
            className="absolute inset-1.5 rounded-full"
            style={{ 
              backgroundColor: T.accent, 
              opacity: 0.2,
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
        </div>
        <p 
          className="font-serif text-xs font-semibold tracking-widest uppercase"
          style={{ color: T.accent, letterSpacing: '0.2em' }}
        >
          Loading
        </p>
      </div>
    </div>
  );
};

export default GlobalLoader;
