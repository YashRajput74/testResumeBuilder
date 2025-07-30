import React, { useState } from "react";
import LayoutEditorModal from "../Features/LayoutEditorModal/LayoutEditorModal";
const navItems = [
  { key: "templates", label: "📚  Templates" },
  { key: "layout", label: "📐 Layout" },
  { key: "design", label: "🎨 Design & Font" },
  { key: "profile", label: "👤 Profile" },
];

const SidebarNav = ({ active, onChange }) => {
  const [showLayoutModal, setShowLayoutModal] = useState(false);

  return (
    <div
    className="sidebarnav"
      style={{
        width: "160px",
        padding: "1rem 0.5rem",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        background: "linear-gradient(to right, #fddb7cc7, #d3bae7)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        margin: "1rem",
        marginTop: "1rem",
         border: "1px solid #ffffff5e"
      }}
    >
      {navItems.map((item) => (
        <div
          key={item.key}
          onClick={() => {
            onChange(item.key);
            if (item.key === "layout") {
              setShowLayoutModal(true);
            }
          }}
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: active === item.key ? "#f0f0f03d" : "transparent",
            fontWeight: active === item.key ? "700" : "400",
          }}
        >
          {item.label}
        </div>
      ))}

      <LayoutEditorModal
        isOpen={showLayoutModal}
        onClose={() => setShowLayoutModal(false)}
      />
    </div>
  );
};

export default SidebarNav;

// import React from "react";
// import LayoutEditorModal from "../Features/LayoutEditorModal/LayoutEditorModal";
// const navItems = [
//   { key: "templates", label: "📄 Templates" },
//   { key: "layout", label: "📐 Layout" },
//   { key: "design", label: "🎨 Design & Font" },
//   { key: "profile", label: "👤 Profile" },
// ];

// const SidebarNav = ({ active, onChange }) => {
//   const [showLayoutModal, setShowLayoutModal] = useState(false);
//   return (
//     <div
//       style={{
//         width: "180px",
//         background: "#fff",
//         borderRight: "1px solid #ddd",
//         padding: "1rem 0.5rem",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         gap: "1rem",
//         background: "linear-gradient(to right, #fddb7cc7, #d3bae7)",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         borderRadius: "12px",
//         width: "200px",
//         marginLeft: "10px",
//         margin: "1rem",
//         border: "1px solid #ffffffbd",

//       }}
//     >
//       {navItems.map((item) => (
//         <div
//           key={item.key}
//           onClick={() => onChange(item.key)}
//           style={{
//             padding: "0.7rem 1rem",
//             borderRadius: "8px",
//             cursor: "pointer",
//             backgroundColor: active === item.key ? "#f0f0f03d" : "transparent",
//             fontWeight: active === item.key ? "700" : "400",
//           }}
//         >
//           {item.label}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SidebarNav;
