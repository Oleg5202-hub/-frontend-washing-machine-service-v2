import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth";

export default function RegisterPage() {
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
      await register(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Не вдалося зареєструватися");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Реєстрація</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        minLength={4}
        required
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Збереження..." : "Зареєструватися"}
      </button>
      <p>Вже є обліковий запис? <Link to="/">Увійти</Link></p>
    </form>
  );
}
