

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


// import React, { useState, useEffect, useRef } from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import { useResume } from "../../context/ResumeContext";

// export default function PersonalInfo() {
//   const { data, updateField, selectedSection, setSelectedSection } = useResume();

//   // Local state for editor content (initially from context data)
//   const [content, setContent] = useState(data.personalInfo?.bio || "");
  
//   // Ref for ReactQuill editor
//   const quillRef = useRef(null);

//   // When user clicks this section, set it as selected to show editor
//   const handleFocus = () => {
//     setSelectedSection("personalInfo");
//   };

//   // When content changes in React Quill, update local state
//   const handleChange = (value) => {
//     setContent(value);
//   };

//   // When user leaves editor (blur), save content to context
//   const handleBlur = () => {
//     updateField("personalInfo", "bio", content);
//     setSelectedSection(null); // Close editor on blur (optional)
//   };

//   return (
//     <div onClick={handleFocus} style={{ position: "relative", cursor: "pointer" }}>
//       {selectedSection === "personalInfo" ? (
//         <ReactQuill
//           ref={quillRef}
//           theme="snow"
//           value={content}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           style={{ minHeight: "150px" }}
//         />
//       ) : (
//         <div
//           dangerouslySetInnerHTML={{ __html: content || "<p>Click to edit Personal Info</p>" }}
//           style={{ minHeight: "150px", border: "1px solid #ddd", padding: "8px" }}
//         />
//       )}
//     </div>
//   );
// }
