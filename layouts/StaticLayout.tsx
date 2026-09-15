import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export const StaticLayout: React.FC = () => {
  return (
    <>
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default StaticLayout;
