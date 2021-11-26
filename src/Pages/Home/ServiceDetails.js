import React from "react";
import {useParams} from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
  const { id } = useParams();
  const {services} = useAuth();
  console.log(services);
  return (
    <>
      {services.filter((data) => data.id === parseInt(id)).map((service) => <ServiceDetailsCard key={service.id} service={service} />)}
    </>
  );
};

export default ServiceDetails;
