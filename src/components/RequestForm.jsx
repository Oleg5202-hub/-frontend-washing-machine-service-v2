import { useState } from "react";
import Modal from "./Modal";
import { createRequest } from "../services/request";

export default function RequestForm({ slot }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [machine, setMachine] = useState("");
  const [model, setModel] = useState("");
  const [desc, setDesc] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createRequest({
        name,
        phone,
        machine,
        model,
        desc,
        day: slot.day,
        time: slot.time,
      });
      setShowModal(true);
    } catch (err) {
      setError(err.message || "Не вдалося відправити заявку");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Заявка на ремонт пральної машини</h2>
        <p>Дата: <strong>{slot.day}</strong></p>
        <p>Час: <strong>{slot.time}</strong></p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше імʼя"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Телефон"
          required
        />
        <input
          type="text"
          value={machine}
          onChange={(e) => setMachine(e.target.value)}
          placeholder="Марка пральної машини (наприклад, Bosch, LG, Samsung)"
          required
        />
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Модель пральної машини (якщо відома)"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Опишіть своїми словами, що не так із пральною машиною"
          required
          rows={5}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Відправлення..." : "Відправити заявку"}
        </button>
      </form>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3>✅ Заявка на ремонт прийнята</h3>
          <p>Пральна машина: {machine}{model ? `, ${model}` : ""}</p>
          <p>Дата: {slot.day}</p>
          <p>Час: {slot.time}</p>
          <p>Опис несправності передано майстру.</p>
          <p>Майстер звʼяжеться з вами найближчим часом.</p>
        </Modal>
      )}
    </>
  );
}
