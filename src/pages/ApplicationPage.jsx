import { useState } from "react";
import Calendar from "../components/Calendar";
import RequestForm from "../components/RequestForm";

export default function ApplicationPage() {
  const [slot, setSlot] = useState(null);

  const handleSlotSelect = (day, time) => {
    setSlot({ day, time });
  };

  return (
    <div>
      <h1 className="page-title">Оформлення заявки</h1>
      {!slot ? (
        <Calendar onSelect={handleSlotSelect} />
      ) : (
        <>
          <button className="back-button" type="button" onClick={() => setSlot(null)}>
            ← Обрати інший час
          </button>
          <RequestForm slot={slot} />
        </>
      )}
    </div>
  );
}
