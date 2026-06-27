import React from 'react';
import { useLocation } from 'react-router-dom';
import TermsAndConditions from '../sections/TermsAndConditions';
import { useSEO } from '../hooks';
import { TERMS_SEO } from '../data';

export const TermsPage: React.FC = () => {
  const location = useLocation();

  useSEO({
    title: TERMS_SEO.title,
    description: TERMS_SEO.description,
    path: location.pathname
  });

  return <TermsAndConditions />;
};

export default TermsPage;
