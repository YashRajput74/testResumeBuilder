

import { useResume } from "../../context/ResumeContext";
import baseInputStyle from "../../styles/baseInputStyle"; // ✅ Import your base input styles

export default function Organizations() {
  const { data, style, editMode, updateField } = useResume();

  const handleChange = (index, key, value) => {
    const updated = [...data.organizations];
    updated[index][key] = value;
    updateField("organizations", null, updated);
  };

  const handleAdd = () => {
    const updated = [...data.organizations, { Title: "", Date: "" }];
    updateField("organizations", null, updated);
  };

  const handleRemove = (index) => {
    const updated = data.organizations.filter((_, i) => i !== index);
    updateField("organizations", null, updated);
  };

  return (
    <div className="organizations" style={style?.organiz?.box}>
      <h2 style={style?.organiz?.heading}>Organizations</h2>

      <div style={style?.organiz?.innerBox}>
        {data.organizations.map((org, index) => (
          <div key={index} style={style?.organiz?.eachOrganiz}>
            {editMode ? (
              <>
                <input
                  type="text"
                  value={org.Title}
                  placeholder="Title"
                  onChange={(e) => handleChange(index, "Title", e.target.value)}
                  style={{ ...baseInputStyle, ...style?.organiz?.title }}
                />
                <input
                  type="text"
                  value={org.Date}
                  placeholder="Date"
                  onChange={(e) => handleChange(index, "Date", e.target.value)}
                  style={{ ...baseInputStyle, ...style?.organiz?.date }}
                />
               
              </>
            ) : (
              <>
                <p style={style?.organiz?.title}>{org.Title}</p>
                <p style={style?.organiz?.date}>{org.Date}</p>
              </>
            )}
          </div>
        ))}

        {editMode && (
          <button
            onClick={handleAdd}
            style={{
              marginTop: "1rem",
              padding: "0.3rem 0.8rem",
              fontSize: "0.9rem",
              cursor: "pointer",
              background: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            + Add Organization
          </button>
        )}
      </div>
    </div>
  );
}
