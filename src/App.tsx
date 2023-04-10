import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdultUserLogin from './Components/AdultComponents/AdultLogin';
import CreateAdultAccount from './Components/AdultComponents/CreateAdultAccount';
import ChildUserLogin from './Components/ChildComponents/ChildLogin';
import CreateChildAccount from './Components/ChildComponents/CreateChildAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<AdultUserLogin /> } /> */}
        {/* <Route path='/' element={<CreateAdultAccount /> } /> */}
        <Route path='/' element={<ChildUserLogin /> } />
        {/* <Route path='/' element={<CreateChildAccount /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
