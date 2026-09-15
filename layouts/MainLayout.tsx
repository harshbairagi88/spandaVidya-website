import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const MainLayout: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
