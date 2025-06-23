import { useEffect, useRef, useState } from "react";
import { useResume } from "../context/ResumeContext";

export default function FloatingToolbar() {
  const { editMode } = useResume();
  const toolbarRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const exec = (command) => document.execCommand(command, false, null);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!editMode || selection.isCollapsed) {
        setVisible(false);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setPosition({
        top: rect.top + window.scrollY - 40,
        left: rect.left + window.scrollX + rect.width / 2 - 60,
      });

      setVisible(true);
    };

    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("keyup", handleSelection);
    document.addEventListener("mousedown", () => setVisible(false));

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("keyup", handleSelection);
      document.removeEventListener("mousedown", () => setVisible(false));
    };
  }, [editMode]);

  if (!visible) return null;

  return (
    <div
      ref={toolbarRef}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        background: "#ffffffdd",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "6px 10px",
        display: "flex",
        gap: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 1000,
        transition: "opacity 0.2s",
      }}
    >
      <button onClick={() => exec("bold")} style={btnStyle}>
        <b>B</b>
      </button>
      <button onClick={() => exec("italic")} style={btnStyle}>
        <i>I</i>
      </button>
      <button onClick={() => exec("underline")} style={btnStyle}>
        <u>U</u>
      </button>
    </div>
  );
}

const btnStyle = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "14px",
};
