import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login as loginRequest } from "../services/auth";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginRequest(email, password);
      login(data);
      navigate("/application");
    } catch (err) {
      setError(err.message || "Не вдалося увійти. Перевірте, чи запущений backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вхід</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        autoComplete="current-password"
        required
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Вхід..." : "Увійти"}
      </button>
    </form>
  );
}
