
import { useResume } from "../../context/ResumeContext";

export default function Education() {
  const { data, style, editMode, updateField } = useResume();

  const handleBlur = (index, key, e) => {
    const updated = [...data.education];
    updated[index][key] = e.target.innerText.trim();
    updateField("education", null, updated);
  };

  return (
    <div className="education" style={style?.education?.box}>
      <h2 style={style?.education?.heading}>Education</h2>

      {data.education.map((edu, index) => (
        <div key={index} style={style?.education?.eachSchool}>
          <h3 style={style?.education?.name}>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "Degree", e)}
            >
              {edu.Degree}
            </span>{" "}
            -{" "}
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "School", e)}
            >
              {edu.School}
            </span>
          </h3>

          <p style={style?.education?.city}>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "City", e)}
            >
              {edu.City}
            </span>{" "}
            |{" "}
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "Start Date", e)}
            >
              {edu["Start Date"]}
            </span>{" "}
            -{" "}
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "End Date", e)}
            >
              {edu["End Date"]}
            </span>
          </p>

          <p
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(index, "Description", e)}
            style={style?.education?.description}
          >
            {edu.Description}
          </p>
        </div>
      ))}
    </div>
  );
}
