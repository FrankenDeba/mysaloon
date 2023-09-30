import React from "react";
import ServiceCard from "../ServiceCard";
import "./Services.css";

function Services({ services, onSelect }) {
  return (
    <div className="services--iso-box">
      <p>Please select at least one service...</p>
      <div className="services--container">
        {Object.values(services)?.map((sev) => (
          <ServiceCard service={sev} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

export default Services;
