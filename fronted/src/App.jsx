import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/01-Navbar';
import CustomCursor from './Components/CustomCursor';
import { Home } from './Pages/01-Home';

function App() {
  useEffect(() => {
    document.body.classList.add('page-loaded');
    return () => document.body.classList.remove('page-loaded');
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="*"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <Home />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
