import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './lib/i18n';

import AppRoutes from './appRoutes.jsx';
import Preloader from './components/preloader/Preloader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <AppRoutes />
  </StrictMode>,
);
