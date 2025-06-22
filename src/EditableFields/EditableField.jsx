// import { useResume } from "../context/ResumeContext";



// export default function EditableField({section, field, style = {}, tag = 'p', type}){

//     const{data, editMode, updateField} = useResume();

//     const Tag = tag;

//      return editMode ? (
//          <input
//       type={type}
//       value={data[section]?.[field] || ""}
//       onChange={(e) => updateField(section, field, e.target.value)}
//       style={style}
//     />
//   ) : (
//     <Tag style={style}>{data[section]?.[field]}</Tag>
//   );
// }


// import { useResume } from "../context/ResumeContext";

// export default function EditableField({ section, field, tag = 'p', type = 'text', style = {} }) {
//   const { data, editMode, updateField } = useResume();
//   const Tag = tag;
//   const value = section ? data[section]?.[field] : data[field];

//   const handleChange = (e) => {
//     if (section) updateField(section, field, e.target.value);
//     else updateField(field, null, e.target.value);
//   };

//   return editMode ? (
//     <input type={type} value={value || ''} onChange={handleChange} style={style} />
//   ) : (
//     <Tag style={style}>{value}</Tag>
//   );
// }


import { useResume } from "../context/ResumeContext";

export default function EditableField({ section, field, tag = 'p', type = 'text', style = {} }) {
  const { data, editMode, updateField } = useResume();
  const Tag = tag;

  const value = section ? data[section]?.[field] : data[field];

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
  };

  return editMode ? (
    <input
      type={type}
      value={value || ''}
      onChange={handleChange}
      placeholder={`Enter ${field}`}
      style={{ ...baseStyle, ...style }}
    />
  ) : (
    <Tag style={{ ...baseStyle, ...style }}>{value}</Tag>
  );
}
