import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import CreateAdminUser from './Components/CreateAdminUser';
import AdminLogin from './Components/AdminLogin';
import AdminInfo from './Components/AdminInfo'
import KidsLogin from './Components/KidsLogin';
import StepOne from './Components/StepOne';
import BeeUser from './Components/BeeUser';
import TaskAssigner from './Components/TaskAssigner';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/CreateAdminUser' element={<CreateAdminUser/>} />        
        <Route path='/AdminLogin' element={<AdminLogin/>} />       
        <Route path='/AdminInfo' element={<AdminInfo/>} />
        <Route path='/StepOne' element={<StepOne/>} />            
        <Route path='/KidsLogin' element={<KidsLogin/>} /> 
        <Route path='/BeeUser' element={<BeeUser/>}/>
        <Route path='/TaskAssigner' element={<TaskAssigner/>}/>  
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
