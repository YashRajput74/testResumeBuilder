import { useEffect, useState } from "react";

const buttonStyle = {
  background: "transparent",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  marginRight: "6px",
};

export default function WYSIWYGToolbar({ targetRef }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const selection = window.getSelection();
      if (
        !selection ||
        selection.isCollapsed ||
        selection.rangeCount === 0 ||
        !targetRef?.current?.contains(selection.anchorNode)
      ) {
        setVisible(false);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setPosition({
        top: window.scrollY + rect.top - 40,
        left: window.scrollX + rect.left + rect.width / 2,
      });
      setVisible(true);
    };

    document.addEventListener("mouseup", updatePosition);
    document.addEventListener("keyup", updatePosition);

    return () => {
      document.removeEventListener("mouseup", updatePosition);
      document.removeEventListener("keyup", updatePosition);
    };
  }, [targetRef]);

  const exec = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -100%)",
        background: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "6px 8px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        zIndex: 9999,
        display: "flex",
      }}
    >
      <button style={buttonStyle} onClick={() => exec("bold")}>B</button>
      <button style={buttonStyle} onClick={() => exec("italic")}>I</button>
      <button style={buttonStyle} onClick={() => exec("underline")}>U</button>
      <button
        style={buttonStyle}
        onClick={() => {
          const url = prompt("Enter URL:");
          if (url) exec("createLink", url);
        }}
      >
        🔗
      </button>
      <button
        style={buttonStyle}
        onClick={() => exec("foreColor", prompt("Font color (e.g. red):"))}
      >
        🎨
      </button>
      <button
        style={buttonStyle}
        onClick={() => exec("backColor", prompt("Highlight color:"))}
      >
        🖍️
      </button>
    </div>
  );
}
