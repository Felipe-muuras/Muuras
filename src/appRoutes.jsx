import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Building from './pages/building/Building';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Building />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/building" element={<Building />} />
      </Routes>
    </Router>
  );
}
