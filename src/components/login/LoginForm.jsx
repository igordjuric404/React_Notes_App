import "./styles.scss";

export default function LoginForm({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
}) {
  return (
    <div className="login-wrapper" style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
