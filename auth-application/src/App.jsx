import { useState } from 'react'
import './App.css'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import { authApp } from './common/AuthContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';

function App() {
  const {userData} = authApp();

  return (
    <> 
      <Router>
          <Routes>
            {(localStorage.getItem('userdata'))?  
                <>
                  <Route exact path='/' element={<Home/>}/>
                  <Route path='*' element={<PageNotFound/>}/> 
                </>
              :
                <>
                {console.log("here is the inside of route after login userData : ",userData)}
                  <Route exact path='/login' element={<Login/>}/>
                  <Route path='/register' element={<SignUp/>} />  
                  <Route path='*' element={<PageNotFound/>}/>
                </>
            }
          </Routes>
        
      </Router>
    </>
  )
}

export default App
