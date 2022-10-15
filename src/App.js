import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';

import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Videos from './Videos';
import Contract from './Contract';
import Login from './Login';



import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/videos' element={<Videos />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contract' element={<Contract />} />
        <Route exact path='/login' element={<Login />} />



      </Routes>
      <Footer />
    </>
  );
};

export default App;
