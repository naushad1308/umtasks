import React from 'react';

function Signup() {
    return (
        <div className="max-w-md mx-auto p-4 pt-6 pb-8 mt-4 mb-4 bg-white rounded shadow-md">
            <h2 className="text-3xl font-bold mb-4">Signup</h2>
            <form className="mb-4">
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="username">Username:</label>
                    <input type="text" id="username" className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input type="email" id="email" className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">Password:</label>
                    <input type="password" id="password" className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded" />
                </div>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded">Signup</button>
            </form>
        </div>
    );
}

export default Signup;