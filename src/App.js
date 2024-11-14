import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
