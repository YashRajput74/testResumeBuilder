import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";

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

  return (
    <div
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        ref={modalRef}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "400px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
          {isLogin ? "Log In" : "Sign Up"}
        </h2>

        <form onSubmit={handleAuth}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p
          onClick={() => setIsLogin(!isLogin)}
          style={{
            cursor: "pointer",
            marginTop: "1rem",
            color: "#007bff",
            textAlign: "center",
          }}
        >
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#ccc",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

