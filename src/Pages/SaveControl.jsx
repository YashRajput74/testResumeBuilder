
import { useResume } from "../context/ResumeContext";

export default function SaveControls() {
  const { editMode, setEditMode, save } = useResume();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: "flex",
        gap: "10px",
      }}
    >
      {editMode ? (
        <>
          <button
            onClick={save}
            style={{
              background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "600",
            }}
          >
            💾 Save
          </button>
          <button
            onClick={() => setEditMode(false)}
            style={{
              background: "#ddd",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "600",
            }}
          >
            ❌ Cancel
          </button>
        </>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          style={{
            background: "linear-gradient(to right, #c6a9e3, #1a1a1a)",
            color: "#ffff",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
          }}
        >
          ✏️ Edit Resume
        </button>
      )}
    </div>
  );
}
