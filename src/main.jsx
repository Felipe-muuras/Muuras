import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './lib/i18n';

import AppRoutes from './appRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
