import React from "react";
import SlotPicker from "../SlotPicker";
import "./Slots.css";

function Slots({ slots, setSlot, slotSelected }) {
  // useEffect(() => {
  //   slotsRef?.current?.scrollIntoView({ behavior: "smooth" });
  // }, []);
  return (
    <div
      className="slots--container"
      //   ref={
      //     slotsRef
      //     // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      //   }
    >
      {slots?.map((slot) => (
        <SlotPicker slot={slot} setSlot={setSlot} slotSelected={slotSelected} />
      ))}
      {slotSelected && <button>SUBMIT</button>}
      {/* <div ref={slotsRef} /> */}
    </div>
  );
}

export default Slots;
