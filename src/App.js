import React from 'react';


import SingUp from './components/SingUp';
import Login from './components/Login';
import { Route,Routes,Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
     <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Singup" element={<SingUp/>}/>
      <Route path='/' element={<Navigate to="/Singup"/>}/>
     </Routes>
    </div>
  );
};

export default App;