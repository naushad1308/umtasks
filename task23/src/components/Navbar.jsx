import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <>
            <nav className='flex justify-between items-center px-10 py-5'>
                <Link to="/"> <img className='h-10 w-10' src={logo} alt="logo" /></Link>
                <ul className="menu">
                    <li className="menuItem"><Link to="/home">Home</Link></li>
                </ul>
                <div className="btnBox">
                    <Link to="/login">  <button className="btn px-2 bg-orange-500 hover:bg-orange-700 text-white font-bold mr-2 p-1 rounded ">Login</button></Link>
                    <Link to="/signup">    <button className="btn px-2 bg-orange-500 hover:bg-orange-700  p-1 rounded text-white">Signup</button></Link>

                </div>
            </nav>
        </>
    )
}

export default Navbar