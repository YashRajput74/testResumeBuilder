import React from "react";

const navItems = [
  { key: "templates", label: "📄 Templates" },
  { key: "layout", label: "📐 Layout" },
  { key: "design", label: "🎨 Design & Font" },
  { key: "profile", label: "👤 Profile" },
];

const SidebarNav = ({ active, onChange }) => {
  return (
    <div
      style={{
        width: "180px",
        background: "#fff",
        borderRight: "1px solid #ddd",
        padding: "1rem 0.5rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {navItems.map((item) => (
        <div
          key={item.key}
          onClick={() => onChange(item.key)}
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: active === item.key ? "#f0f0f0" : "transparent",
            fontWeight: active === item.key ? "600" : "normal",
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default SidebarNav;
