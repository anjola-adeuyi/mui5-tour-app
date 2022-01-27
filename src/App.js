
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TourAppBar from './components/TourAppBar'
import Home from './pages/Home'
import Tour from './pages/Tour'


function App() {
  return (
    <BrowserRouter>
      <TourAppBar title='Mui5 Tour App' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
