

// import { useResume } from "../../context/ResumeContext";
// import FloatingToolbarPro from "../../Pages/FloatingToolbarPro";
// export default function Skills() {
//   const { data, style, editMode, updateField, setSelectedSection } = useResume();

//   const handleBlur = (index, e) => {
//     const newValue = e.target.textContent.trim();
//     const updatedSkills = [...data.skills];
//     updatedSkills[index] = newValue;
//     updateField("skills", null, updatedSkills); 
//   };

//   if (style.skills?.list) {
//     return (
//       <div className="skills" style={style?.skills?.box}>
//         <h2  onFocus={() => setSelectedSection("skills")} style={style?.skills?.heading}>Skills</h2>
//         <ul style={style?.skills?.wholeList}>
//           {data.skills.map((skill, index) => (
//             <li
//               key={index}
//               contentEditable={editMode}
//               suppressContentEditableWarning={true}
//               onBlur={(e) => handleBlur(index, e)}
//                onFocus={() => setSelectedSection("skills")}
//               style={style?.skills?.listItem}
//             >
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   } else {
//     return (
      
//       <div className="skills" style={style?.skills?.box}  onFocus={() => setSelectedSection("skills")}>
//         <h2  style={style?.skills?.heading}>Skills</h2>
//         <FloatingToolbarPro sectionKey={Skills} position={{ top: "-45px", right: "20px" }} />
//         <div className="individualSkill" style={style?.skills?.everySkillBox}>
//           {data.skills.map((skill, index) => (
//             <div
//               key={index}
//               contentEditable={editMode}
//               suppressContentEditableWarning={true}
//                onFocus={() => setSelectedSection("skills")}
//               onBlur={(e) => handleBlur(index, e)}
//               style={style?.skills?.eachSkillBox}
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
        
//       </div>
//     );
//   }
// }




// import { useResume } from "../../context/ResumeContext";
// import FloatingToolbarPro from "../../Pages/FloatingToolbarPro";

// export default function Skills() {
//   const { data, style, editMode, updateField, setSelectedSection } = useResume();

//   const handleBlur = (index, e) => {
//     const newValue = e.target.textContent.trim();
//     const updatedSkills = [...data.skills];
//     updatedSkills[index] = newValue;
//     updateField("skills", null, updatedSkills);
//   };

//   if (style.skills?.list) {
//     return (
//       <div
//         className="skills"
//         style={{ ...style?.skills?.box, position: "relative" }}
//         onClick={() => setSelectedSection("skills")}
//       >
//         <h2 style={style?.skills?.heading}>Skills</h2>
//   {setSelectedSection === "skills" && (
//   <FloatingToolbarPro sectionKey="skills" position={{ top: "-45px", right: "20px" }} />
// )}
//         {/* ✅ Show floating toolbar */}
//         <FloatingToolbarPro sectionKey="skills" position={{ top: "-45px", right: "20px" }} />

//         <ul style={style?.skills?.wholeList}>
//           {data.skills.map((skill, index) => (
//             <li
//               key={index}
//               contentEditable={editMode}
//               suppressContentEditableWarning={true}
//               onBlur={(e) => handleBlur(index, e)}
//               style={style?.skills?.listItem}
//             >
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className="skills"
//         style={{ ...style?.skills?.box, position: "relative" }}
//         onClick={() => setSelectedSection("skills")}
//       >
//         <h2 style={style?.skills?.heading}>Skills</h2>

// {setSelectedSection === "skills" && (
//   <FloatingToolbarPro sectionKey="skills" position={{ top: "-45px", right: "20px" }} />
// )}
//         {/* ✅ Floating toolbar for this block */}
//         <FloatingToolbarPro sectionKey="skills" position={{ top: "-45px", right: "20px" }} />

//         <div className="individualSkill" style={style?.skills?.everySkillBox}>
//           {data.skills.map((skill, index) => (
//             <div
//               key={index}
//               contentEditable={editMode}
//               suppressContentEditableWarning={true}
//               onBlur={(e) => handleBlur(index, e)}
//               style={style?.skills?.eachSkillBox}
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

import { useResume } from "../../context/ResumeContext";
import FloatingToolbarPro from "../../Pages/FloatingToolbarPro";

export default function Skills() {
  const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

  const handleBlur = (index, e) => {
    const newValue = e.target.textContent.trim();
    const updatedSkills = [...data.skills];
    updatedSkills[index] = newValue;
    updateField("skills", null, updatedSkills);
  };

  const showToolbar = selectedSection === "skills";

  if (style.skills?.list) {
    return (
      <div
        className="skills resumeSection"
        style={{ ...style?.skills?.box, position: "relative" }}
        onClick={() => setSelectedSection("skills")}
      >
        <h2 style={style?.skills?.heading}>Skills</h2>

        {showToolbar && (
          <FloatingToolbarPro sectionKey="skills" position={{ top: "-45px", right: "20px" }} />
        )}

        <ul style={style?.skills?.wholeList}>
          {data.skills.map((skill, index) => (
            <li
              key={index}
              contentEditable={editMode}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleBlur(index, e)}
              style={style?.skills?.listItem}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div
        className="skills resumeSection"
        style={{ ...style?.skills?.box, position: "relative" }}
        onClick={() => setSelectedSection("skills")}
      >
        <h2 style={style?.skills?.heading}>Skills</h2>

        {showToolbar && (
          <FloatingToolbarPro sectionKey="skills" position={{ top: "-45px", right: "20px" }} />
        )}

        <div className="individualSkill" style={style?.skills?.everySkillBox}>
          {data.skills.map((skill, index) => (
            <div
              key={index}
              contentEditable={editMode}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleBlur(index, e)}
              style={style?.skills?.eachSkillBox}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

