import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = (props) => {
    const {id, name, img, details} = props.service;
    return (
        
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={img}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
              {name}
              </h2>
              <p className="leading-relaxed text-base mb-5">
                {details.slice(0,100)} ... ... ...
              </p>
              <NavLink to={`/service-details/${id}`} className="px-10 py-2 text-white rounded-full bg-bgPrimary hover:bg-pink-500"> Details </NavLink>
            </div>
          </div>
        
    );
};

export default ServiceCard;