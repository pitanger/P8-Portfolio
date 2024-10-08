import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './index.scss';

import Accueil from './pages/accueil';
import Traduction from './pages/traduction'; // Importation de la page Traduction
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/traduction" element={<Traduction />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
