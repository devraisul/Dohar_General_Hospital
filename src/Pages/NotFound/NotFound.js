import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col w-full">
            <h1 className="text-center text-9xl font-extrabold text-black">404</h1>
            <p className="mb-20 mt-10">Page is not found!</p>
            <NavLink to='/' className="text-white shadow-sm bg-bgPrimary hover:bg-red-600 font-semibold px-16 rounded-md py-5">Go Back</NavLink>
        </div>
    );
};

export default NotFound;