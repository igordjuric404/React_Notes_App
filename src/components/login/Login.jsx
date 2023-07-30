import { useState } from "react";
import Layout from "../layout/Layout";
import LoginForm from "./LoginForm";
import { AuthenticateUser } from "./AuthenticateUser";
import Notification from "./Notification";
import "./styles.scss";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);

  const handleLogin = async () => {
    try {
      const isLoggedIn = await AuthenticateUser(email, password);

      if (!isLoggedIn) {
        setNotification({
          type: "error",
          message: "Wrong credentials",
        });
      } else {
        setNotification({
          type: "success",
          message: "Login successful",
        });
        setIsLoggedIn(true);
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Login failed. Please try again later.",
      });
    }
  };

  return (
    <Layout headerTitle="Login">
      <div className="login-form">
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </Layout>
  );
}
