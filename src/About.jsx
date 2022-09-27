import React from 'react'
import bagImage from '../src/image/26.jpg'
import './index.css'
import './App.css'
import '../src/about.css'
import Card from './Card'
import SecondCard from './SecondCard'
import Footer from './Footer';

const About = () => {
  return (
    <div>
        <div className='container-fluid text-light'>
          <div className='row'>
            <div className='col-4 padding padding-b'>
              <img src={bagImage} className='about-image' alt='error'/>
            </div>
            <div className='col-8 padding '>
              <h2 className='about-heading'>About</h2>
              <div className='under-line'></div>
              <p className='about-heading'>Inaya Fashion Bag & Parse Collection - Retail Shop of ladies parse, designer bag & fashionable bag in Bhopal, Madhya Pradesh.
              Inaya Fashion Bag & Parse Collection - Retail Shop of ladies parse, designer bag & fashionable bag in Bhopal, Madhya Pradesh.
              Inaya Fashion Bag & Parse Collection - Retail Shop of ladies parse, designer bag & fashionable bag in Bhopal, Madhya Pradesh.
              Inaya Fashion Bag & Parse Collection - Retail Shop of ladies parse, designer bag & fashionable bag in Bhopal, Madhya Pradesh.
              Inaya Fashion Bag & Parse Collection - Retail Shop of ladies parse, designer bag & fashionable bag in Bhopal, Madhya Pradesh.
              </p>
            </div>
            <div className='App-header'>
            <h2 className='mt-4 produc about-heading'>Products & Sevices</h2>
            <div className='under-line'></div>
            
            <Card/>
            <SecondCard/>
          
            </div>
            
           
          </div>
        </div>
        <div>
            <Footer/>
            </div>
        
      
    </div>
  )
}

export default About
