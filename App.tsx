
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Challenge from './sections/Challenge';
import Approach from './sections/Approach';
import Progress from './sections/Progress';
import Differentiation from './sections/Differentiation';
import Mission from './sections/Mission';
import Contact from './sections/Contact';
import Team from './sections/Teams';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Hero />
        <Challenge />
        <Approach />
        <Progress />
        <Differentiation />
        <Mission />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
