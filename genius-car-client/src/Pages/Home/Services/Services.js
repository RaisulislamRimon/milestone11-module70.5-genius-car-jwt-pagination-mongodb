import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/services?order=${isAsc ? "asc" : "desc"}`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, [isAsc]);
  return (
    <div>
      <div className="text-center my-12">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h1 className="text-5xl font-semibold my-5">Our Service Area</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button onClick={() => setIsAsc(!isAsc)}>
          {isAsc ? "desc" : "asc"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
