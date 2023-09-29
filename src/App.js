import Services from "./components/Services";
import "./App.css";
import HaircutImg from "./assets/haircut1.jpg";

import facialImg from "./assets/facial.jpg";
import parlourImg from "./assets/parlour.jpg";
import servicesList from "./constants/services";

// import HaircutImg from "./assets/haircut1.jpg";
import { useEffect, useState } from "react";
import DatePicker from "./components/DatePicker";
import DateSelected from "./components/DateSelected";
import Slots from "./components/Slots";
import dayjs from "dayjs";
import Header from "./components/Header";

function App() {
  const [services, setServices] = useState({});
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [date, setDate] = useState();
  const [slots, setSlots] = useState([]);
  const [slot, setSlot] = useState();

  useEffect(() => {
    setServices((prevSer) => {
      return {
        ...prevSer,
        // haircut: {
        //   title: "hair cut",
        //   id: 1,
        //   imgSrc: HaircutImg,
        // },
        // facial: {
        //   title: "Facial",
        //   id: 2,
        //   imgSrc: facialImg,
        // },
        // massage: {
        //   title: "Massage",
        //   id: 3,
        //   imgSrc: HaircutImg,
        // },
        ...servicesList,
      };
    });
  }, []);

  const selectedServicesHandler = (service) => {
    setSelectedServices(
      (prevSel) => {
        return new Set([...prevSel, service]);
      },
      () => {
        console.log({ selectedServices });
      }
    );
  };

  const setDateHandler = (value) => {
    const slots = [];
    for (let hour = 0; hour < 12; hour++)
      slots.push({
        id: hour + 1,
        start: dayjs(value).add(hour, "hour").format("HH:mm a"),
        end: dayjs(value)
          .add(hour + 1, "hour")
          .format("HH:mm a"),
        isAvailable: hour % 2 === 0,
      });

    console.log("slots: ", slots);

    setDate(value);
    setSlots(slots);
  };

  const setSlotHandler = (slot) => {
    setSlot(slot);
  };

  useEffect(() => {
    console.log("selectedServices: ", selectedServices);
  }, [selectedServices]);

  return (
    <div className="App">
      <Header />
      <div>
        <div className="parlour-and-services">
          <Services services={services} onSelect={selectedServicesHandler} />
          <div className="parlour-img-holder">
            <img src={parlourImg} alt="parlour" />
          </div>
        </div>
        {selectedServices.size > 0 && (
          <DatePicker setDateHandler={setDateHandler} />
        )}
        <DateSelected date={date} />
        <Slots slots={slots} setSlot={setSlotHandler} slotSelected={slot?.id} />
      </div>
    </div>
  );
}

export default App;
