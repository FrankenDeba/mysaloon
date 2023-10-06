import React, { useState } from "react";
import "./SlotPicker.css";

function SlotPicker({ slot, setSlot, slotSelected }) {
  //   const [selected, isSelected] = useState(false);
  const setSlotHandler = () => {
    // isSelected(true);
    if (slot?.isAvailable) setSlot(slot);
  };
  return (
    <div
      className={`slot-picker--container ${
        slotSelected === slot?.id ? "slot-selected" : ""
      }
      ${slot.isAvailable ? "" : "not-available"}
      `}
      onClick={() => setSlotHandler()}
    >
      <p className="not-allowed-tick">x</p>
      {slotSelected === slot?.id && <span className="slot-tick">✔</span>}
      {`${slot.start} - ${slot.end}`}
    </div>
  );
}

export default SlotPicker;
