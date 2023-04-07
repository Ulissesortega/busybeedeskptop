import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import AdminInfo from './Components/AdminInfo';


function App() {
  return (
    <BrowserRouter>
      <Route path='/' element={<Login />} />
      <Route path='/AdminInfo' element={<AdminInfo/>} />
  </BrowserRouter>

  );
}

export default App;
