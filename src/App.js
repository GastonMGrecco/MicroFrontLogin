import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home/HomeApp';
import Login from './routes/Login/LoginApp';
import Logup from './routes/LogUp/LogupApp';

const App = () => {
  return (
    <HashRouter>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/logup'>LogUp</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logup' element={<Logup/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
