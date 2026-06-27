import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Challenge from '../sections/Challenge';
import CataractDetection from '../sections/CataractDetection';
import Approach from '../sections/Approach';
import Progress from '../sections/Progress';
import Differentiation from '../sections/Differentiation';
import Mission from '../sections/Mission';
import PhilosophySection from '../sections/PhilosophySection';
import TechSection from '../sections/TechSection';
import Team from '../sections/Teams';
import Contact from '../sections/Contact';
import { useSEO } from '../hooks';
import { HOME_SEO } from '../data';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useSEO({
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    path: location.pathname
  });

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

export default HomePage;
