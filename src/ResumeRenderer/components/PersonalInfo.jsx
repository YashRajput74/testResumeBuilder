

import { useResume } from "../../context/ResumeContext";

export default function PersonalInfo() {
  const { data, style, editMode, updateField } = useResume();

  const handleBlur = (field, e) => {
    const value = e.target.innerText.trim();
    updateField(null, field, value); 
  };

  return (
    <div className="personalInfo" style={style?.personalInfo?.box}>
      <h1
        style={style?.personalInfo?.name}
      >
        <span
          contentEditable={editMode}
          suppressContentEditableWarning
          onBlur={(e) => handleBlur("firstName", e)}
        >
          {data.firstName}
        </span>{" "}
        <span
          contentEditable={editMode}
          suppressContentEditableWarning
          onBlur={(e) => handleBlur("lastName", e)}
        >
          {data.lastName}
        </span>
      </h1>

      <h3
        contentEditable={editMode}
        suppressContentEditableWarning
        onBlur={(e) => handleBlur("position", e)}
        style={style?.personalInfo?.position}
      >
        {data.position}
      </h3>

      <p
        contentEditable={editMode}
        suppressContentEditableWarning
        onBlur={(e) => handleBlur("summary", e)}
        style={style?.personalInfo?.summary}
      >
        {data.summary}
      </p>
    </div>
  );
}
