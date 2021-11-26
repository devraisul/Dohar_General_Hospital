import React from "react";
import ServiceCard from "./ServiceCard";
import useAuth from '../../hooks/useAuth';

const Services = () => {
  const {services} = useAuth();
  
  return (
    <div className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-5xl  text-center text-2xl font-medium title-font mb-10 text-white">
          Our Services
        </h1>
        <div className="flex flex-wrap -m-2">
          {services.map(service => <ServiceCard key={service.id} service={service} /> )}  
        </div>
      </div>
    </div>
  );
};

export default Services;
