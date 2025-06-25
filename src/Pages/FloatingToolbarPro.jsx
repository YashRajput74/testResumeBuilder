import { useResume } from "../context/ResumeContext";
import { motion } from "framer-motion";

const icons = {
  add: "➕",
  remove: "➖",
  subfield: "➕🔧",
  color: "🎨",
  hide: "👁️‍🗨️",
};

const tooltipStyle = {
  position: "absolute",
  bottom: "-22px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "12px",
  color: "#fff",
  background: "#333",
  padding: "3px 8px",
  borderRadius: "4px",
  whiteSpace: "nowrap",
};

export default function FloatingToolbarPro({ sectionKey, position = {} }) {
  const { data, updateField, selectedSection } = useResume();

  if (selectedSection !== sectionKey) return null;

  const sectionData = data?.[sectionKey] || [];

  const handleAdd = () => {
    if (typeof sectionData[0] === "string" || sectionData.length === 0) {
      updateField(sectionKey, null, [...sectionData, ""]);
    } else {
      updateField(sectionKey, null, [...sectionData, {}]);
    }
  };

  const handleDelete = () => {
    updateField(sectionKey, null, sectionData.slice(0, -1));
  };

  const handleSubfield = () => {
    if (typeof sectionData[0] === "object") {
      const newEntry = { ...sectionData[0] };
      for (let key in newEntry) {
        newEntry[key] = "";
      }
      updateField(sectionKey, null, [...sectionData, newEntry]);
    }
  };

  const handleColorChange = () => {
    const newColor = prompt("Enter color (e.g. #f0f0f0 or red):");
    if (newColor) {
      updateField("style", sectionKey, {
        ...data?.style?.[sectionKey],
        box: {
          ...data?.style?.[sectionKey]?.box,
          backgroundColor: newColor,
        },
      });
    }
  };

  const style = {
    position: "absolute",
    top: position?.top || "-42px",
    right: position?.right || "10px",
    display: "flex",
    gap: "12px",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    border: "1px solid #ddd",
    padding: "8px 14px",
    borderRadius: "14px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    zIndex: 9999,
  };

  const buttonStyle = {
    position: "relative",
    padding: "8px",
    fontSize: "18px",
    background: "linear-gradient(to right, #fef6ff, #fff3f3)",
    border: "1px solid #e6cfff",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  };

  const actions = [
    { icon: icons.add, action: handleAdd, label: "Add Field" },
    { icon: icons.remove, action: handleDelete, label: "Delete Last" },
    { icon: icons.subfield, action: handleSubfield, label: "Add Subfield" },
    { icon: icons.color, action: handleColorChange, label: "Change Color" },
  ];

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {actions.map(({ icon, action, label }, i) => (
        <div key={i} style={{ position: "relative" }}>
          <button
            style={buttonStyle}
            onClick={action}
            onMouseEnter={(e) => {
              const tooltip = document.createElement("div");
              tooltip.innerText = label;
              Object.assign(tooltip.style, tooltipStyle);
              e.currentTarget.appendChild(tooltip);
            }}
            onMouseLeave={(e) => {
              const tooltip = e.currentTarget.querySelector("div");
              if (tooltip) tooltip.remove();
            }}
          >
            {icon}
          </button>
        </div>
      ))}
    </motion.div>
  );
}


