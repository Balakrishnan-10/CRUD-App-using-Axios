import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Update from './Pages/Update';
import Create from './Pages/Create';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [id,setId] =useState(0);
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/users' element = {<Products setId = {setId} />} />
      <Route path = '/edit/:id' element = {<Update id = {id}  />} />
      <Route path = '/create' element = {<Create />} />
    </Routes>
    <div>
      <Footer />
    </div>
    </BrowserRouter>
    </div>
  );
};

export default App;