// export default function Skills({ data }) {
//     return (
//         <div className="skills">
//             <h2>Skills</h2>
//             <ul>
//                 {data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
//             </ul>
//         </div>
//     );
// }


// import { useResume } from '../../context/ResumeContext';
// import EditableArrayField from '../../EditableFileds/EditableArrayField';
// export default function Skills() {
//     const {data, style}= useResume();
//     return (
//         <div className="skills" style={style?.skills?.box}>
//             <h2 style={style?.skills?.heading}>Skills</h2>
//             <div className="individualSkill" style={style?.skills?.everySkillBox}>
//                 {data.skills.map((skill, index) => <div key={index} style={style?.skills?.eachSkillBox}>{skill}</div>)}
//             </div>
//         </div>
//     );
// }

// import { useResume } from "../../context/ResumeContext";
// import EditableArrayField from "../../EditableFields/EditableArrayField";

// export default function Skills() {
//   const { data, style, editMode } = useResume();

//   return (
//     <div className="skills" style={style?.skills?.box}>
//       <h2 style={style?.skills?.heading}>Skills</h2>

//       {editMode ? (
//         <EditableArrayField
//           section="skills"
//           style={style?.skills?.eachSkillBox}
//         />
//       ) : (
//         <div
//           className="individualSkill"
//           style={style?.skills?.everySkillBox}
//         >
//           {data.skills.map((skill, index) => (
//             <div
//               key={index}
//               style={style?.skills?.eachSkillBox}
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

//  import EditableArrayField from "../../EditableFields/EditableArrayField";

// export default function Skills() {
//   const { data, style, editMode } = useResume();

//   return (
//     <div className="skills" style={style?.skills?.box}>
//       <h2 style={style?.skills?.heading}>Skills</h2>

//       {editMode ? (
//         <EditableArrayField
//           section="skills"
//           style={style?.skills?.everySkillBox}       
//           itemStyle={style?.skills?.eachSkillBox}    
//         />
//       ) : (
//         <div
//           className="individualSkill"
//           style={style?.skills?.everySkillBox}
//         >
//           {data.skills.map((skill, index) => (
//             <div
//               key={index}
//               style={style?.skills?.eachSkillBox}
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// import baseInputStyle from "../../data/baseInputStyle";
// export default function Skills() {
//   const { data, style, editMode, updateField } = useResume();

//   const skills = data.skills;

//   const handleChange = (index, value) => {
//     const updated = [...skills];
//     updated[index] = value;
//     updateField("skills", null, updated);
//   };

//   const handleAdd = () => {
//     const updated = [...skills, ""];
//     updateField("skills", null, updated);
//   };

//   const handleRemove = (index) => {
//     const updated = skills.filter((_, i) => i !== index);
//     updateField("skills", null, updated);
//   };

//   return (
//     <div className="skills" style={style?.skills?.box}>
//       <h2 style={style?.skills?.heading}>Skills</h2>

//       {editMode ? (
//         <div style={style?.skills?.everySkillBox}>
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "0.5rem",
//                 marginBottom: "4px",
//               }}
//             >
//               <input
//                 value={skill}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 style={{
//                   ...baseInputStyle,
//                   ...style?.skills?.eachSkillBox,
//                 }}
//               />
//               {/* <button onClick={() => handleRemove(index)}>❌</button> */}
//             </div>
//           ))}
//           {/* <button onClick={handleAdd} style={{ marginTop: "8px" }}>
//             + Add Skill
//           </button> */}
//         </div>
//       ) : (
//         <div
//           className="individualSkill"
//           style={style?.skills?.everySkillBox}
//         >
//           {skills.map((skill, index) => (
//             <div key={index} style={style?.skills?.eachSkillBox}>
//               {skill}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useResume } from "../context/ResumeContext";
// import EditableArrayField from '' 

// export default function Skills() {
//   const { data, style, editMode, updateField } = useResume();

//   const handleChange = (newSkills) => {
//     updateField("skills", null, newSkills); // No key because "skills" is a simple array
//   };

//   return (
//     <div style={style?.skills?.box}>
//       <h2 style={style?.skills?.heading}>Skills</h2>
//       <EditableArrayField
//         items={data.skills}
//         onChange={handleChange}
//         listStyle={{ listStyleType: "square", paddingLeft: "20px" }}
//         inputStyle={style?.skills?.eachSkillBox}
//       />
//     </div>
//   );
// }
import { useResume } from '../../context/ResumeContext';

export default function Skills() {
  const { data, style, editMode, updateField } = useResume();

  const handleBlur = (index, e) => {
    const updated = [...data.skills];
    updated[index] = e.target.innerText.trim();
    updateField("skills", null, updated);
  };

  const handleAdd = () => {
    const updated = [...data.skills, "New Skill"];
    updateField("skills", null, updated);
  };

  const handleRemove = (index) => {
    const updated = data.skills.filter((_, i) => i !== index);
    updateField("skills", null, updated);
  };

  return (
    <div className="skills" style={style?.skills?.box}>
      <h2 style={style?.skills?.heading}>Skills</h2>
      <div className="individualSkill" style={style?.skills?.everySkillBox}>
        {data.skills.map((skill, index) => (
          <div
            key={index}
            style={style?.skills?.eachSkillBox}
          >
            <div
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, e)}
              style={{
                ...style?.skills?.eachSkillBox,
                whiteSpace: "pre-wrap"
              }}
            >
              {skill}
            </div>

            {/* {editMode && (
              <button
                onClick={() => handleRemove(index)}
                style={{
                  marginLeft: "8px",
                  background: "none",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                ❌
              </button>
            )} */}
          </div>
        ))}

        {editMode && (
          <button
            onClick={handleAdd}
            style={{
              marginTop: "10px",
              background: "none",
              border: "1px dashed gray",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            ➕ Add Skill
          </button>
        )}
      </div>
    </div>
  );
}
