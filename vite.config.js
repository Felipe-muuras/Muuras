import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel serves the app at the domain root. (For GitHub Pages under a
  // sub-path, this would need to be '/Muuras/'.)
  base: '/',
  ssr: {
    // Bundle these into the SSR build so their ESM/CJS default exports
    // resolve correctly during prerendering (styled-components' `styled.div`
    // breaks when externalized). See scripts/prerender.mjs.
    noExternal: ['styled-components', 'react-i18next', 'i18next'],
  },
});
