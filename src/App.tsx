import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import CreateAdminUser from './Components/CreateAdminUser';
import AdminLogin from './Components/AdminLogin';
import AdminInfo from './Components/AdminInfo'
import KidsLogin from './Components/KidsLogin';
import StepOne from './Components/StepOne';
import BeeUser from './Components/BeeUser';
import TaskAssigner from './Components/TaskAssigner';
import RewardsCreator from './Components/RewardsCreator'
import UsersDashboard from './Components/UserComponents/UsersDashboard';

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
        <Route path='/RewardsCreator' element={<RewardsCreator/>}/>  
        <Route path='/UsersDashboard' element={<UsersDashboard/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
