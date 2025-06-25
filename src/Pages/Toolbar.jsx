
import { useEffect, useRef } from "react";
import { useResume } from "../context/ResumeContext";

export default function Toolbar() {
  const { editMode, setEditMode } = useResume();
  const savedSelection = useRef(null);

  useEffect(() => {
    const saveSelection = () => {
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        savedSelection.current = sel.getRangeAt(0);
      }
    };

    document.addEventListener("mouseup", saveSelection);
    document.addEventListener("keyup", saveSelection);

    return () => {
      document.removeEventListener("mouseup", saveSelection);
      document.removeEventListener("keyup", saveSelection);
    };
  }, []);

  const exec = (command, value = null) => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      
      return;
    }

    if (savedSelection.current) {
      sel.removeAllRanges();
      sel.addRange(savedSelection.current);
    }

    document.execCommand("styleWithCSS", false, true);
    document.execCommand(command, false, value);
  };

  const toolbarStyle = {
    position: "fixed",
    top: '70px',
    left:  '606px',
    right: 0,
    zIndex: 999,
    width: "50%",
    background: "linear-gradient(to right, #fef6ff, #fff3f3)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #cda1e2;",
    padding: "10px 20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
    borderRadius: "13px 36px 13px 36px",
   
  };

  const buttonStyle = {
    padding: "8px 12px",
    background: "#fff8f1",
    border: "1px solid #f0d9ff",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    color: "#6a1b9a",
    transition: "all 0.2s",
  };
if (!editMode) return null;
  return (
    <div className="toolbar" style={toolbarStyle}>
      <button style={buttonStyle} onClick={() => exec("bold")}><b>B</b></button>
      <button style={buttonStyle} onClick={() => exec("italic")}><i>I</i></button>
      <button style={buttonStyle} onClick={() => exec("underline")}><u>U</u></button>
      <button style={buttonStyle} onClick={() => exec("insertUnorderedList")}>• List</button>
      <button style={buttonStyle} onClick={() => exec("insertOrderedList")}>1. List</button>
      <button
        style={buttonStyle}
        onClick={() => {
          const url = prompt("Enter URL:");
          if (url) exec("createLink", url);
        }}
      >
        🔗 Link
      </button>
      <button style={buttonStyle} onClick={() => exec("undo")}>↩️ Undo</button>
      <button style={buttonStyle} onClick={() => exec("redo")}>↪️ Redo</button>
      <button style={buttonStyle} onClick={() => exec("removeFormat")}>🧹 Clear</button>
    </div>
  );
}


