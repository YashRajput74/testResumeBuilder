
// export default function EditableArrayField({ section, style = {}, itemStyle = {} }) {
//   const { data, updateField, editMode } = useResume();

//   const handleChange = (index, value) => {
//     const updated = [...data[section]];
//     updated[index] = value;
//     updateField(section, null, updated);
//   };

//   const handleAdd = () => {
//     const updated = [...(data[section] || []), ""];
//     updateField(section, null, updated);
//   };

//   const handleRemove = (index) => {
//     const updated = data[section].filter((_, i) => i !== index);
//     updateField(section, null, updated);
//   };

//   return (
//     <div style={style}>
//       {data[section]?.map((item, index) => (
//         <div key={index} style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "4px" }}>
//           {editMode ? (
//             <>
//               <input
//                 type="text"
//                 value={item}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 style={itemStyle}
//               />
//               <button onClick={() => handleRemove(index)}>❌</button>
//             </>
//           ) : (
//             <span style={itemStyle}>{item}</span>
//           )}
//         </div>
//       ))}
//       {editMode && <button onClick={handleAdd}>+ Add</button>}
//     </div>
//   );
// }




// export default function EditableArrayField({ section, style = {}, itemStyle = {} }) {
//   const { data, updateField, editMode } = useResume();

//   // Validate it's an array
//   const values = data[section];
//   if (!Array.isArray(values)) {
//     console.error(`❌ data["${section}"] is not an array:`, values);
//     return <p style={{ color: "red" }}>⚠️ "{section}" must be an array</p>;
//   }

//   const handleChange = (index, value) => {
//     const updated = [...values];
//     updated[index] = value;
//     updateField(section, null, updated); // key = null means replace the top-level array
//   };

//   const handleAdd = () => {
//     const updated = [...values, ""];
//     updateField(section, null, updated);
//   };

//   const handleRemove = (index) => {
//     const updated = values.filter((_, i) => i !== index);
//     updateField(section, null, updated);
//   };

//   return (
//     <div style={style}>
//       {values.map((item, index) => (
//         <div key={index} style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "4px" }}>
//           {editMode ? (
//             <>
//               <input
//                 type="text"
//                 value={item}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 style={itemStyle}
//               />
//               <button onClick={() => handleRemove(index)}>❌</button>
//             </>
//           ) : (
//             <span style={itemStyle}>{item}</span>
//           )}
//         </div>
//       ))}
//       {editMode && <button onClick={handleAdd}>+ Add</button>}
//     </div>
//   );
// }

// import { useResume } from "../context/ResumeContext";

// export default function EditableArrayField({ section, style = {}, itemStyle = {} }) {
//   const { data, updateField, editMode } = useResume();

//   const values = data[section];

//   if (!Array.isArray(values)) {
//     console.error(`❌ data["${section}"] is not an array:`, values);
//     return <p style={{ color: "red" }}>⚠️ "{section}" must be an array</p>;
//   }

//   const handleChange = (index, value) => {
//     const updated = [...values];
//     updated[index] = value;
//     updateField(section, null, updated);
//   };

//   const handleAdd = () => {
//     const updated = [...values, ""];
//     updateField(section, null, updated);
//   };

//   const handleRemove = (index) => {
//     const updated = values.filter((_, i) => i !== index);
//     updateField(section, null, updated);
//   };

//   // ✅ Match item input with non-edit style
//   const inputStyle = {
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
//   };

//   return (
//     <div style={style}>
//       {values.map((item, index) => (
//         <div
//           key={index}
//           style={{
//             display: "flex",
//             gap: "0.5rem",
//             alignItems: "center",
//             marginBottom: "4px",
//           }}
//         >
//           {editMode ? (
//             <>
//               <input
//                 type="text"
//                 value={item}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 style={{ ...inputStyle, ...itemStyle }}
//               />
//               <button onClick={() => handleRemove(index)}>❌</button>
//             </>
//           ) : (
//             <span style={{ ...inputStyle, ...itemStyle }}>{item}</span>
//           )}
//         </div>
//       ))}
//       {editMode && <button onClick={handleAdd}>+ Add</button>}
//     </div>
//   );
// }


import { useResume } from "../context/ResumeContext";

export default function EditableArrayField({ items, onChange, style, inputStyle }) {
  const { editMode } = useResume();

  const handleItemChange = (index, value) => {
    const updated = [...items];
    updated[index] = value;
    onChange(updated);
  };

  return (
    <ul style={style}>
      {items.map((item, idx) => (
        <li key={idx}>
          {editMode ? (
            <input
              type="text"
              value={item}
              onChange={(e) => handleItemChange(idx, e.target.value)}
              style={inputStyle}
            />
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
}
