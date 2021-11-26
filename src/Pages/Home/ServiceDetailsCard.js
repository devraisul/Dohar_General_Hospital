import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceDetailsCard = (props) => {
  const {name, img, details, price} = props.service;
    return (
        <div className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={img}
        />
        <div className="lg:w-2/3 w-full text-left ml-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {name} {price}
          </h1>
          <p className="leading-relaxed mb-8">
            {details}
            Details
          </p>
          <div className="flex">
            <NavLink to='/purchase_complete' className="inline-flex text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
            Purchase
            </NavLink>
            <NavLink to='/home' className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Back To Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceDetailsCard;