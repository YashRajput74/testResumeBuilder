import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";
import "./AuthModal.css";

export default function AuthModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return <></>;

  const handleAuth = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert(error.message);
      else {
        alert("Logged in!");
        onClose();
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) alert(error.message);
      else {
        alert("Check your email for confirmation.");
        onClose();
      }
    }
  };
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={handleOutsideClick}>
      <div className="auth-modal" ref={modalRef}>
        <h2>{isLogin ? "Log In" : "Sign Up"}</h2>

        <form onSubmit={handleAuth}>
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
            placeholder="Password"
            required
          />
          <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log In"}
        </p>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

