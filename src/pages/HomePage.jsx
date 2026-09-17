import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page-card">
      <h1>Ремонт пральних машин</h1>
      <p>Оберіть зручний час для візиту майстра та залиште заявку на ремонт пральної машини.</p>
      <Link className="primary-link" to="/application">Записатися на ремонт</Link>
    </div>
  );
}
