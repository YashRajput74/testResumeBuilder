import { useResume } from "../context/ResumeContext";

export default function Toolbar() {
  const { editMode, setEditMode, save } = useResume();

  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      {editMode ? (
        <>
          <button onClick={save}>💾 Save</button>
          <button onClick={() => setEditMode(false)}>❌ Cancel</button>
        </>
      ) : (
        <button onClick={() => setEditMode(true)}>✏️ Edit</button>
      )}
    </div>
  );
}
