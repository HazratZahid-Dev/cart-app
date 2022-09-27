import React, { useState } from 'react';
import Nav from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


   const [mystyle,setmystyle]=useState({
    color:'black',
    backgroundColor:'grey'
});
const [btn,setbtn]=useState('LightMode')
const togglestyle=()=>{
    if (mystyle.color==='black') {
        setmystyle({
            color:'white',
            backgroundColor:'#0D2A3B'
        }) 
        setbtn('LightMode'); 
    }else{
            setmystyle({
                color:'black',
                backgroundColor:'grey'
            })
            setbtn('DarkMode') 
        }
        
    }
    
    

  
 

  return (
    <div style={mystyle}>
   
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
          <Routes>
            <Route path='contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
      
      <div >
      <button className='btn btn-outline-primary text-light dark-btn' type='button' onClick={togglestyle}>{btn}</button>  
    </div>
 
    </div>

  );
}

export default App;
