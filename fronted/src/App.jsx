import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/01-Navbar';
//Pages
import { Home } from './Pages/01-Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
