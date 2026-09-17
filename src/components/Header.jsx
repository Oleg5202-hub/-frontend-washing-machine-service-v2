import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logout as logoutRequest } from "../services/auth";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutRequest();
    } catch {
      // Локальний вихід виконуємо навіть якщо backend тимчасово недоступний.
    }
    logout();
    navigate("/");
  };

  return (
    <header>
      <h1>Ремонт пральних машин</h1>
      <nav>
        {!user ? (
          <>
            <Link to="/">Авторизація</Link>
            <Link to="/register">Реєстрація</Link>
          </>
        ) : (
          <>
            <Link to="/application">Заявка на ремонт</Link>
            <button type="button" onClick={handleLogout}>Вийти</button>
          </>
        )}
      </nav>
    </header>
  );
}
