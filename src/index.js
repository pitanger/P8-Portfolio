import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Accueil from './pages/accueil';
import Traduction from './pages/traduction';
import Introduction from './pages/introduction';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/traduction" element={<Traduction />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
