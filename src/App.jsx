import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Header from './components/Header';

const App = () => {

  return (

    <>

      <Router>

        <Header />

        <Routes>

          <Route path="/" element={<Products />} />

        </Routes>

      </Router>

    </>

  )

}

export default App