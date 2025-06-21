// src/components/editable/EditableRichTextArea.jsx

// export default function EditableRichTextArea({ section, field, rows = 4, style = {} }) {
//   const { data, editMode, updateField } = useResume();

//   return editMode ? (
//     <textarea
//       rows={rows}
//       value={data[section]?.[field] || ""}
//       onChange={(e) => updateField(section, field, e.target.value)}
//       style={style}
//     />
//   ) : (
//     <p style={style}>{data[section]?.[field]}</p>
//   );
// }

// src/EditableFields/EditableRichTextArea.jsx
// import { useResume } from "../context/ResumeContext";

// export default function EditableRichTextArea({ section = null, field, rows = 5, style = {} }) {
//   const { data, editMode, updateField } = useResume();

//   const value = section ? data[section]?.[field] : data?.[field];

//   const handleChange = (e) => {
//     if (section) updateField(section, field, e.target.value);
//     else updateField(field, null, e.target.value); // top-level
//   };
// console.log("Rendering EditableRichTextArea with value:", value);
//   console.log("Edit mode:", editMode);
//   return editMode ? (
//     <textarea
//       rows={rows}
//       value={value || ""}
//       onChange={handleChange}
//       style={style}
//     />
//   ) : (
//     <p style={style}>{value}</p>
//   );
// }


// import { useResume } from "../context/ResumeContext";

// export default function EditableRichTextArea({ section = null, field, rows = 5, style = {} }) {
//   const { data, editMode, updateField } = useResume();

//   const value = section ? data[section]?.[field] : data?.[field];

//   const handleChange = (e) => {
//     if (section) updateField(section, field, e.target.value);
//     else updateField(field, null, e.target.value);
//   };

//   // ✅ Make textarea match static styles
//   const baseStyle = {
//     fontSize: "inherit",
//     fontWeight: "inherit",
//     fontFamily: "inherit",
//     color: "inherit",
//     border: "none",
//     background: "transparent",
//     outline: "none",
//     padding: 0,
//     margin: 0,
//     width: "100%",
//     resize: "none",
//   };

//   return editMode ? (
//     <textarea
//       rows={rows}
//       value={value || ""}
//       onChange={handleChange}
//       placeholder={`Enter ${field}`}
//       style={{ ...baseStyle, ...style }}
//     />
//   ) : (
//     <p style={{ ...baseStyle, ...style }}>{value}</p>
//   );
// }

// src/EditableFields/EditableRichTextArea.jsx
import { useResume } from "../context/ResumeContext";

export default function EditableRichTextArea({ section = null, field, rows = 5, style = {} }) {
  const { data, editMode, updateField } = useResume();

  const value = section ? data[section]?.[field] : data?.[field];

  const handleChange = (e) => {
    if (section) updateField(section, field, e.target.value);
    else updateField(field, null, e.target.value);
  };

  const baseStyle = {
    fontSize: "inherit",
    fontWeight: "inherit",
    fontFamily: "inherit",
    color: "inherit",
    border: "none",
    background: "transparent",
    outline: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    resize: "none",
  };

  return editMode ? (
    <textarea
      rows={rows}
      value={value || ""}
      onChange={handleChange}
      placeholder={`Enter ${field}`}
      style={{ ...baseStyle, ...style }}
    />
  ) : (
    <p style={{ ...baseStyle, ...style }}>{value}</p>
  );
}
