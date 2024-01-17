import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paysage from './components/table';
import Portrait from './components/portrait';
import Navbar from './components/navbar'
import LoginPage from './components/login';
import SAMPLE from './components/sample';

function App() {
  const isAuthenticated = true; 

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/paysage" element={<Paysage />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path='/sample' element={ <SAMPLE /> } />
      </Routes>
    </Router>
  );
}

export default App;
