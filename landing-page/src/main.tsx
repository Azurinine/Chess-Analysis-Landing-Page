import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind styles
import LandingPage from './LandingPage'; // Adjust path if it's not in src/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
