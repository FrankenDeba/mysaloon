import React from "react";
import ServiceCard from "../ServiceCard";
import "./Services.css";

function Services({ services, onSelect }) {
  return (
    <div className="services--container">
      {Object.values(services)?.map((sev) => (
        <ServiceCard service={sev} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default Services;
