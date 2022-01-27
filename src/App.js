
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TourAppBar from './components/TourAppBar'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <TourAppBar title='Mui5 Tour App' />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
