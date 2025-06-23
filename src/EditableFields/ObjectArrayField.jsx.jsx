// import { useResume } from "../context/ResumeContext";
// import EditableField from "./EditableField";
// import baseInputStyle from "../data/baseInputStyle";

// export default function ObjectArrayField({ section, fields, style = {} }) {
//   const { data, editMode, updateField } = useResume();

//   const handleChange = (index, field, value) => {
//     const updated = [...data[section]];
//     updated[index][field] = value;
//     updateField(section, null, updated);
//   };

//   return (
//     <>
//       {data[section].map((item, index) => (
//         <div key={index} style={{ marginBottom: "1rem" }}>
//           {fields.map((field) => (
//             <input
//               key={field}
//               type="text"
//               value={item[field] || ""}
//               onChange={(e) => handleChange(index, field, e.target.value)}
//               placeholder={field}
//               style={{ ...baseInputStyle, ...style?.[field] }} 
//             />
//           ))}
//         </div>
//       ))}
//     </>
//   );
// }

import baseInputStyle from "../data/baseInputStyle";
import { useResume } from "../context/ResumeContext";

export default function ObjectArrayField({ section, fields, style = {} }) {
  const { data, updateField, editMode } = useResume();

  const values = data[section];

  const handleChange = (index, key, value) => {
    const updated = [...values];
    updated[index][key] = value;
    updateField(section, null, updated);
  };

  const handleAdd = () => {
    const newItem = {};
    fields.forEach((field) => (newItem[field] = ""));
    updateField(section, null, [...values, newItem]);
  };

  const handleRemove = (index) => {
    const updated = values.filter((_, i) => i !== index);
    updateField(section, null, updated);
  };

  return (
    <div style={style}>
      {values.map((item, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          {fields.map((field, fIndex) => (
            <input
              key={fIndex}
              type="text"
              value={item[field] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={field}
              style={{ ...baseInputStyle, ...style}} // 🔥 Apply inherited style
            />
          ))}
          <button onClick={() => handleRemove(index)}>❌</button>
        </div>
      ))}
      <button onClick={handleAdd}>+ Add</button>
    </div>
  );
}

