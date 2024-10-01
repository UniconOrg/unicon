import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './modules/home/presentation/pages/HomePage';
import FAQPage from './modules/faq/presentation/pages/FAQPage';
import AppLayout from './modules/app/presentation/layouts/AppLayout';
import AnimatedPage from './modules/app/presentation/pages/AnimatedPage';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        <Route path="/faq" element={<AnimatedPage><FAQPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppLayout>
        <AnimatedRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;