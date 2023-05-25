import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from './Context/UserContext';
import Login from './Components/Login';
import CreateAdminUser from './Components/CreateAdminUser';
import AdminLogin from './Components/AdminLogin';
import AdminInfo from './Components/AdminInfo'
import KidsLogin from './Components/KidsComponents/KidsLogin';
import StepOne from './Components/StepOne';
import BeeUser from './Components/BeeUser';
import TaskAssigner from './Components/TaskAssigner';
import RewardsCreator from './Components/RewardsCreator'
import UsersDashboard from './Components/UserComponents/UsersDashboard';
import AddBeeUser from './Components/UserComponents/AddBeeUser';
import PasswordRecovery from './Components/PasswordRecovery/PasswordRecovery';
import TempPassword from './Components/PasswordRecovery/TempPassword'
import KidsTasks from './Components/KidsComponents/KidsTasks';
import KidsRewards from './Components/KidsComponents/KidsRewards';
import BeeInfo from './Components/UserComponents/BeeInfo'
import AllTasks from './Components/AllTasks';
import AllRewards from './Components/AllRewards';
import KidsNavBar from './Components/KidsNavBar'


function App() {
  const [adminData, setAdminData] = useState<object>({});
  const [userData, setUserData] = useState<object>({});
  const [createBee, setcreateBee] = useState<string>('');

  const setAdmin = (adminData: object) => {
    setAdminData(adminData);
  }
  const setUser = (userData: object) => {
    setUserData(userData);
  }
  const setCreationBee = (bee: string) => {
    setcreateBee(bee);
  }
  return (
    <MyContext.Provider value={{adminData, setAdmin, userData, setUser, createBee, setCreationBee }} >
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
          <Route path='/RewardsCreator' element={<RewardsCreator/>}/>  
          <Route path='/UsersDashboard' element={<UsersDashboard/>}/>
          <Route path='/AddBeeUser' element={<AddBeeUser/>}/>
          <Route path='/PasswordRecovery' element={<PasswordRecovery/>}/>  
          <Route path='/TempPassword' element={<TempPassword/>}/>   
          <Route path='/KidsTasks' element={<KidsTasks/>}/>  
          <Route path='/KidsRewards' element={<KidsRewards />} />
          <Route path='/BeeInfo' element={<BeeInfo/>} />  
          <Route path='/AllTasks' element={<AllTasks/>} />  
          <Route path='/AllRewards' element={<AllRewards/>} />  
          <Route path='/KidsNavBar' element={<KidsNavBar />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
