import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from './Context/UserContext';
import Login from './Components/Login';
import CreateAdminUser from './Components/CreateAdminUser';
import AdminLogin from './Components/AdminLogin';
import AdminInfo from './Components/AdminInfo'
import KidsLogin from './Components/KidsLogin';
import StepOne from './Components/StepOne';
import BeeUser from './Components/BeeUser';
import TaskAssigner from './Components/TaskAssigner';


function App() {
  const [adminData, setAdminData] = useState<object>({});
  const [createBee, setcreateBee] = useState<string>('');

  const setAdmin = (admin: object) => {
    setAdminData(admin);
  }
  const setCreationBee = (bee: string) => {
    setcreateBee(bee);
  }
  return (
    <MyContext.Provider value={{adminData, setAdmin, createBee, setCreationBee }} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/CreateAdminUser' element={<CreateAdminUser />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/AdminInfo' element={<AdminInfo />} />
          <Route path='/StepOne' element={<StepOne />} />
          <Route path='/KidsLogin' element={<KidsLogin />} />
          <Route path='/BeeUser' element={<BeeUser />} />
          <Route path='/TaskAssigner' element={<TaskAssigner />} />

        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
