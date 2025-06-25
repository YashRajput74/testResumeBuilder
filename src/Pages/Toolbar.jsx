
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

  // const toolbarStyle = {
  //   position: "fixed",
  //   top: '120px',
  //   left:  '606px',
  //   right: 0,
  //   zIndex: 999,
  //   width: "50%",
  //   background: "linear-gradient(to right, #fef6ff, #fff3f3)",
  //   backdropFilter: "blur(10px)",
  //   borderBottom: "1px solid #cda1e2;",
  //   padding: "10px 20px",
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  //   gap: "10px",
  //   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
  //   borderRadius: "13px 36px 13px 36px",
   
  // };
  const toolbarStyle = {
  position: "fixed",
  top: "120px",
  left: "606px",
  right: 0,
  zIndex: 999,
  width: "50%",
  background: "linear-gradient(to right, #1e1e1e, #2a2a2a)", // subtle black gradient
  backdropFilter: "blur(8px)",
  padding: "10px 20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",

  // 🟣 Softer, professional styling
  borderRadius: "6px",
  color: "white",
  boxShadow: "0 0 8px #c6a9e3", // soft purple glow
  border: "1px solid #333", // subtle border to separate from background
};


  const buttonStyle = {
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    color: "#6a1b9a",
     background: "#3a3a3a",               // hover darken
  borderColor: "#c6a9e3",              // purple border on hover
  color: "#ffffff",                    // text white on hover
  boxShadow: "0 0 6px #c6a9e3",  
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


