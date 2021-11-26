import React from 'react';
import { NavLink } from 'react-router-dom';
import Purchase from '../../images/Purchase.png';

const PurchaseComplete = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <img className='w-1/4 h-auto' src={Purchase} alt="" />
            <h1 className='text-4xl mb-5'>Order Completed!</h1>
            <NavLink to='/home'  className="inline-flex text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
                Back To Home
            </NavLink>
        </div>
    );
};

export default PurchaseComplete;