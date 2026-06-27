import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export const StaticLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default StaticLayout;
