// src/components/ResumeHeader.jsx
import React from "react";
import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onDownload }) {
    const navigate = useNavigate();
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "linear-gradient(to right, #d3bae7, #fdda7c)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: '0',
        zIndex: '999',
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
             {/* LOGO LEFT */}
 <div className="logo"    onClick={() => navigate("/")}
  style={{ cursor: "pointer" }} >Heitech.</div>
       
      </div>

      {/* BUTTON RIGHT */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          className="btnPrimary"
          onClick={onDownload}
          style={{
           background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
            color: "white",
            padding: "0.5rem 1.2rem",
            fontWeight: "600",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          ⬇️ Download
        </button>

        {/* Placeholder profile icon */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#444",
            color: "#fff",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          KB
        </div>
      </div>
    </header>
  );
}
