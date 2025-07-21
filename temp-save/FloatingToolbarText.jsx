import { useEffect, useRef, useState } from "react";

const toolbarStyle = {
  position: "absolute",
  background: "white",
  padding: "8px 10px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  display: "flex",
  gap: "10px",
  zIndex: 999999,
  border: "1px solid #ddd",
  fontSize: "18px",
  transform: "translate(-50%, -100%)", 
  pointerEvents: "auto",
};

const buttonStyle = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "18px",
};

export default function FloatingToolbarText({ targetRef }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updateToolbar = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setVisible(false);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      const isInside =
        targetRef?.current &&
        targetRef.current.contains(range.startContainer) &&
        targetRef.current.contains(range.endContainer);

      if (!isInside) {
        setVisible(false);
        return;
      }

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollX = window.scrollX || document.documentElement.scrollLeft;

      setPosition({
        top: rect.top + scrollY,
        left: rect.left + scrollX + rect.width / 2,
      });

      setVisible(true);
    };

    document.addEventListener("mouseup", updateToolbar);
    document.addEventListener("keyup", updateToolbar);

    return () => {
      document.removeEventListener("mouseup", updateToolbar);
      document.removeEventListener("keyup", updateToolbar);
    };
  }, [targetRef]);

  const exec = (command, value = null) => {
    document.execCommand(command, false, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        ...toolbarStyle,
       
      }}
    >
      <button
        style={buttonStyle}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => exec("bold")}
        title="Bold"
      >
        <b>B</b>
      </button>
      <button
        style={buttonStyle}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => exec("italic")}
        title="Italic"
      >
        <i>I</i>
      </button>
      <button
        style={buttonStyle}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => exec("underline")}
        title="Underline"
      >
        <u>U</u>
      </button>
    </div>
  );
}