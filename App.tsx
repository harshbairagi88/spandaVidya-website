import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Approach from './sections/Approach';
import CataractDetection from './sections/CataractDetection';
import Challenge from './sections/Challenge';
import Contact from './sections/Contact';
import Differentiation from './sections/Differentiation';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import PhilosophySection from './sections/PhilosophySection';
import Progress from './sections/Progress';
import Team from './sections/Teams';
import TechSection from './sections/TechSection';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsAndConditions from './sections/TermsAndConditions';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Listen to custom navigation events
    window.addEventListener('navigate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('navigate', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('navigate'));
  };

  // Render specific layout blocks
  const renderContent = () => {
    if (currentPath === '/privacy') {
      return <PrivacyPolicy onNavigate={navigateTo} />;
    }
    if (currentPath === '/terms') {
      return <TermsAndConditions onNavigate={navigateTo} />;
    }
    return (
      <>
        <Hero />
        <Challenge />
        <CataractDetection />
        <Approach />
        <Progress />
        <Differentiation />
        <Mission />
        <PhilosophySection />
        <TechSection />
        <Team />
        <Contact />
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <GlobalBackground />
      {currentPath === '/' && (
        <header>
          <Navbar />
        </header>
      )}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} currentPath={currentPath} />
    </div>
  );
};

export default App;
