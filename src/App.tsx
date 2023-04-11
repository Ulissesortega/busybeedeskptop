import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import CreateAdminUser from './Components/CreateAdminUser';
import AdminLogin from './Components/AdminLogin';
import KidsLogin from './Components/KidsLogin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/CreateAdminUser' element={<CreateAdminUser/>} />        
        <Route path='/AdminLogin' element={<AdminLogin/>} />       
        <Route path='/KidsLogin' element={<KidsLogin/>} />       
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
