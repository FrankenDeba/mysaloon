import React from "react";

// import HaircutImg from "./assets/haircut1.jpg";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

import servicesList from "./constants/services";

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

  const selectedServicesHandler = (service: any, isSelected: boolean) => {
    setSelectedServices((prevSel) => {
      return new Set([...prevSel, service]);
    });
  };

  const setDateHandler = (value) => {
    const slots = [];
    for (let hour = 0; hour < 12; hour++)
      slots.push({
        id: hour + 1,
        start: dayjs(value).add(hour, "hour").format("HH:mma"),
        end: dayjs(value)
          .add(hour + 1, "hour")
          .format("HH:mma"),
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
      <Home
        setDateHandler={setDateHandler}
        setSlotHandler={setSlotHandler}
        selectedServicesHandler={selectedServicesHandler}
        date={date}
        slots={slots}
        slot={slot}
        services={services}
        selectedServices={selectedServices}
      />
    </div>
  );
}

export default App;
