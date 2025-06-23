
import { useResume } from "../../context/ResumeContext";

export default function WorkExperience() {
  const { data, style, editMode, updateField } = useResume();

  const handleChange = (index, key, value) => {
    const updated = [...data.experience];
    updated[index][key] = value;
    updateField("experience", null, updated);
  };

  const handleDescriptionChange = (expIndex, descIndex, value) => {
    const updated = [...data.experience];
    updated[expIndex].Description[descIndex] = value;
    updateField("experience", null, updated);
  };

  const handleAddDescription = (index) => {
    const updated = [...data.experience];
    updated[index].Description.push("");
    updateField("experience", null, updated);
  };

  const handleRemoveDescription = (expIndex, descIndex) => {
    const updated = [...data.experience];
    updated[expIndex].Description.splice(descIndex, 1);
    updateField("experience", null, updated);
  };

  return (
    <div className="workExperience" style={style?.workExpe?.box}>
      <h2 style={style?.workExpe?.heading}>Work Experience</h2>
      {data.experience.map((exp, index) => (
        <div className="workPlace" key={index} style={style?.workExpe?.eachWorkPlace}>
          <h3
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleChange(index, "Role", e.target.innerText)}
            style={style?.workExpe?.role}
          >
            {exp.Role}
          </h3>

          <h4
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleChange(index, "Organization", e.target.innerText)}
            style={style?.workExpe?.organization}
          >
            {exp.Organization}
          </h4>

          <p
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleChange(index, "Location", e.target.innerText)}
            style={style?.workExpe?.dates}
          >
            {exp.Location}
          </p>

          <p
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleChange(index, "Start Date", e.target.innerText)}
            style={style?.workExpe?.dates}
          >
            {exp["Start Date"]}
          </p>

          <p
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleChange(index, "End Date", e.target.innerText)}
            style={style?.workExpe?.dates}
          >
            {exp["End Date"]}
          </p>

          <ul style={style?.workExpe?.wholeList}>
            {exp.Description.map((desc, descIndex) => (
              <li
                key={descIndex}
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) =>
                  handleDescriptionChange(index, descIndex, e.target.innerText)
                }
                style={style?.workExpe?.bullets}
              >
                {desc}
              
              </li>
            ))}
          </ul>

          {editMode && (
            <button onClick={() => handleAddDescription(index)}>+ Add Point</button>
          )}
        </div>
      ))}
    </div>
  );
}
