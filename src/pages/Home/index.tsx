import React, { ReactElement } from "react";
import DatePicker from "../../components/DatePicker";
import DateSelected from "../../components/DateSelected";
import Services from "../../components/Services";
import Slots from "../../components/Slots";
import parlourImg from "../../assets/parlour.jpg";

type homeTypes = {
  services: any;
  selectedServicesHandler: Function;
  setDateHandler: Function;
  setSlotHandler: Function;
  slots: any[];
  selectedServices: any;
  date: any;
  slot: any;
};

function Home({
  services,
  selectedServicesHandler,
  setDateHandler,
  setSlotHandler,
  slots,
  selectedServices,
  date,
  slot,
}: homeTypes): ReactElement {
  return (
    <div>
      <div className="parlour-and-services">
        <div className="skew-bg2"></div>
        <Services services={services} onSelect={selectedServicesHandler} />
        <div className="parlour-img-holder">
          <img src={parlourImg} alt="parlour" />
        </div>
        <div className="skew-bg1">
          <div className="skew-bg1-square"></div>
        </div>
      </div>
      {selectedServices.size > 0 && (
        <DatePicker setDateHandler={setDateHandler} />
      )}
      <DateSelected date={date} />
      <Slots slots={slots} setSlot={setSlotHandler} slotSelected={slot?.id} />
    </div>
  );
}

export default Home;
