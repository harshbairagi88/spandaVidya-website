import React from 'react';
import GlobalBackground from './components/GlobalBackground';
import ErrorBoundary from './components/ErrorBoundary';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GlobalBackground />
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </div>
  );
};

export default App;
