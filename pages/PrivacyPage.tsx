import React from 'react';
import { useLocation } from 'react-router-dom';
import PrivacyPolicy from '../sections/PrivacyPolicy';
import { useSEO } from '../hooks';
import { PRIVACY_SEO } from '../data';

export const PrivacyPage: React.FC = () => {
  const location = useLocation();

  useSEO({
    title: PRIVACY_SEO.title,
    description: PRIVACY_SEO.description,
    path: location.pathname
  });

  return <PrivacyPolicy />;
};

export default PrivacyPage;
