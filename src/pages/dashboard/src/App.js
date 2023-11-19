import React, { useState, useEffect } from 'react';
import Goods from './pages/front-end/goods';
import Brand from './pages/front-end/brand';
import Tracker from './pages/Tracker';
import Home from './pages/front-end/eco';
import Product from './pages/front-end/product_demo';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            {' '}
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/goods" element={<Goods />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product_demo" element={<Product />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
