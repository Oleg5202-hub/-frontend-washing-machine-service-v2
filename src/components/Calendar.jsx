export default function Calendar({ onSelect }) {
  const slots = ["10:00-12:00", "13:00-15:00", "16:00-18:00"];
  const days = [
    { key: "today", label: "Сьогодні" },
    { key: "tomorrow", label: "Завтра" },
    { key: "afterTomorrow", label: "Післязавтра" }
  ];

  const handleSelect = (day, time) => {
    if (typeof onSelect === "function") {
      onSelect(day, time);
    }
  };

  return (
    <div>
      {days.map((day) => (
        <section key={day.key}>
          <h2>{day.label}</h2>
          <div className="calendar-grid">
            {slots.map((time) => (
              <button
                type="button"
                key={`${day.key}-${time}`}
                onClick={() => handleSelect(day.label, time)}
              >
                {time}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
