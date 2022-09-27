import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../src/image/images.png'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";

import './index.css'
import './App.css'
function Navbar() {

    /*  const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'grey'
    });
    const [btn, setbtn] = useState('LightMode')
    const togglestyle = () => {
        if (mystyle.color === 'black') {
            setmystyle({
                color: 'white',
                backgroundColor: '#354658'
            })
            setbtn('LightMode');
        } else {
            setmystyle({
                color: 'black',
                backgroundColor: 'grey'
            })
            setbtn('DarkMode')
        }

    }
    */



    return (
        <div >
            <nav className={`navbar navbar-expand-lg    navbar navbar-text bg-primary `} >
                <div className='container'>

                    <Link to="/" className="nav-link active navbar-brand">
                        <img alt='error' src={logo} className='Logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  mar-right" id="navbarSupportedContent ">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link active text-bold">Home </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link active">About </Link>

                            </li>
                            <div>
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link active mr-2">Contact </Link>
                                </li>
                            </div>
                            <div>
                                <li className="nav-item">
                                    <Link to="/More" className="nav-link active mr-2">More</Link>
                                </li>
                            </div>
                             {/* <div>
                                <li className="nav-item">
                                   <button type="button" className="btn btn-success btn-sm" onClick={togglestyle}>{btn}</button>
                                </li>
                            </div> 
                             */}


                           


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );

}
export default Navbar;