import React, { useState } from "react";
import "./ServiceCard.css";

function ServiceCard({ onSelect, service }) {
  const [selected, setSelected] = useState();
  const onSelectedHandler = (ser) => {
    setSelected((sel) => !sel);
    onSelect(ser);
  };

  return (
    <div
      className={`service-card--container ${selected ? "selected" : ""}`}
      onClick={() => onSelectedHandler(service)}
    >
      {selected && <div className="tick">✔</div>}
      <div className="service-card--img-holder">
        <img src={service.imgSrc} />
      </div>
      <div className="service-card--title">{service.title}</div>
    </div>
  );
}

export default ServiceCard;
