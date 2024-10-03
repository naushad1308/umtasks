
import React from 'react'
import '../App.css'

function Header() {
    return (
        <>
            <header className=' fixed py-5 px-5 flex space-x-7   text-xl w-full bg-gray-100 z-10'>
                <span className='text-gray-900 font-bold '><img className='rounded-lg' src="https://t3.ftcdn.net/jpg/02/47/48/00/240_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" alt="" height={50} width={40} /></span>
                <ul className='flex space-x-16 '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </header>
        </>

    )
}

export default Header