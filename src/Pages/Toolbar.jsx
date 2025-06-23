
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
              background: "linear-gradient(to right, #d3bae7,rgb(103, 82, 24))",
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
            background: "#e0f7fa",
            color: "#00796b",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "1px solid #b2dfdb",
            fontWeight: "600",
          }}
        >
          ✏️ Edit Resume
        </button>
      )}
    </div>
  );
}
