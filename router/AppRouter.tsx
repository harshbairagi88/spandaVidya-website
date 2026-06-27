import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollManager from './ScrollManager';
import MainLayout from '../layouts/MainLayout';
import StaticLayout from '../layouts/StaticLayout';
import HomePage from '../pages/HomePage';
import GlobalLoader from '../components/GlobalLoader';
import { ROUTES } from './routes';

const PrivacyPage = React.lazy(() => import('../pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('../pages/TermsPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

export const AppRouter: React.FC = () => {
  return (
    <>
      <ScrollManager />
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          {/* Main Layout routes - HomePage with Navbar */}
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
          </Route>

          {/* Static Layout routes - Privacy, Terms, 404 without Navbar */}
          <Route element={<StaticLayout />}>
            <Route path={ROUTES.PRIVACY} element={<PrivacyPage />} />
            <Route path={ROUTES.TERMS} element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
