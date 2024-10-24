import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <>
            <header className='fixed py-5 px-5 flex space-x-7 text-xl w-full bg-gray-100 z-10'>
                <span className='text-gray-900 font-bold'>
                    <Link to="/"> <img className='rounded-lg' src="https://t3.ftcdn.net/jpg/02/47/48/00/240_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" alt="" height={50} width={40} /></Link>
                </span>
                <ul className='flex space-x-16'>
                    <li>
                        <Link to="/" className='text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className='text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className='text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;