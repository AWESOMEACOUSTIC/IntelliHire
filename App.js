import React from 'react';
import Main from './components/Main';
import Round2 from './components/Round2';
import Round1 from './components/Round1';
import Home from './dashboard/Home';
import Login from './dashboard/Login';
import Resume from './components/Resume';
import L from './dashboard/L';
import R from './dashboard/R';
import Re from './components/Re';
import T from './dashboard/T';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { List } from '@mui/material';



function App() {
  return (
      <div className='bg-slate-100'>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Main />} />
              <Route path='Home' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='list' element={<L />} />
              <Route path='report' element={<R />} />
              <Route path='resume' element={<Resume />} />
              <Route path='round1' element={<Round1 />} />
              <Route path='round2' element={<Round2 />} />
              <Route path='r' element={<Re/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
