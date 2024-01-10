import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import './App.css';
import Home from './components/Home';
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<AddUser />}></Route>
      </Routes>

    </div>
  );
}

export default App;
