import React, { ReactElement, useState } from "react";
import "./ServiceCard.css";

function ServiceCard({ onSelect, service }): ReactElement {
  const [selected, setSelected] = useState<boolean | undefined>();
  const onSelectedHandler = (ser) => {
    onSelect(ser, !selected);
    setSelected((sel) => !sel);
  };

  return (
    <div
      className={`service-card--container ${selected ? "selected" : ""}`}
      onClick={() => onSelectedHandler(service)}
    >
      {selected && <div className="tick">✔</div>}
      <div className="service-card--img-holder">
        <img src={`${service.imgSrc}`} alt="service" />
      </div>
      <div className="service-card--title">{service.title}</div>
    </div>
  );
}

export default ServiceCard;
