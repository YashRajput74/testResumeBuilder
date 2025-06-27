
import { useEffect } from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Avatar from "./components/Avatar";
import Strengths from "./components/Strength";
import Achievements from "./components/Achivements";
import Language from "./components/Language";
import Awards from "./components/Awards";
import Organizations from "./components/Organizations";
import "./ResumeRenderer.css";

import { useResume } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle"; 

const sectionComponents = {
 personalInfo: PersonalInfo,
    education: Education,
    workExperience: WorkExperience,
    skills: Skills,
    projects: Projects,
    contact: Contact,
    summary: Summary,
    strengths: Strengths,
    achievements: Achievements,
    organizations: Organizations,
    avatar: Avatar,
    language: Language,
    awards: Awards
};

export default function ResumeRenderer({ template }) {
  const { data, style,setSelectedSection } = useResume();


useEffect(() => {
  const handleClickOutside = (e) => {
    if (!e.target.closest(".resumeSection")) {
      setSelectedSection(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const { grid, fontFamily, fontSize, colorScheme } = template.layout;

  const templateId = String(template.id);
  const templateStyle = templateStyles[templateId] || {}; 
  const cssVariables = templateStyle.vars || {};         

  const renderSection = (sectionName) => {
    const SectionComponent = sectionComponents[sectionName];
    return SectionComponent ? <SectionComponent /> : null;
  };

  const numRows = grid.templateRows.split(" ").length;
  const numCols = grid.templateColumns.split(" ").length;

  const gridMatrix = Array.from({ length: numRows }, () =>
    Array(numCols).fill(".")
  );

  grid.areas.forEach((area) => {
    for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
      for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
        gridMatrix[row][col] = area.name;
      }
    }
  });

  const gridTemplateAreas = gridMatrix.map((row) => `"${row.join(" ")}"`).join(" ");

  return (
    <div
      id="resume-view"
      style={{
        fontFamily,
        fontSize,
        background: colorScheme.background,
        color: colorScheme.text,
        gridTemplateColumns: grid.templateColumns,
        gridTemplateRows: grid.templateRows,
        rowGap: grid.rowGap,
        columnGap: grid.columnGap,
        display: "grid",
        gridTemplateAreas,
        ...cssVariables, 
      }}
    >
      {grid.areas.map((area, index) => (
        <div key={index} style={{ gridArea: area.name }}>
          {area.sections.map((section) => (
            <div key={section}>{renderSection(section)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}




// import { useEffect, useState } from "react";
// import DraggableSection from "../Pages/DraggableSection";
// // import {
// //   Projects, Skills, WorkExperience, Education,
// //   PersonalInfo, Contact, Summary, Avatar,
// //   Strengths, Achievements, Language, Awards, Organizations
// // } from "./components";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Education from "./components/Education";
// import PersonalInfo from "./components/PersonalInfo";
// import Contact from "./components/Contact";
// import Summary from "./components/Summary";
// import Avatar from "./components/Avatar";
// import Strengths from "./components/Strength";
// import Achievements from "./components/Achivements";
// import Language from "./components/Language";
// import Awards from "./components/Awards";
// import Organizations from "./components/Organizations";

// import "./ResumeRenderer.css";
// import { useResume } from "../context/ResumeContext";
// import templateStyles from "../data/templateStyle";

// const sectionComponents = {
//   personalInfo: PersonalInfo,
//   education: Education,
//   workExperience: WorkExperience,
//   skills: Skills,
//   projects: Projects,
//   contact: Contact,
//   summary: Summary,
//   strengths: Strengths,
//   achievements: Achievements,
//   organizations: Organizations,
//   avatar: Avatar,
//   language: Language,
//   awards: Awards
// };

// export default function ResumeRenderer({ template }) {
//   const { data, style, setSelectedSection, selectedSection } = useResume();

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest(".resumeSection")) {
//         setSelectedSection(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const { grid, fontFamily, fontSize, colorScheme } = template.layout;
//   const templateId = String(template.id);
//   const templateStyle = templateStyles[templateId] || {};
//   const cssVariables = templateStyle.vars || {};

//   const [gridAreas, setGridAreas] = useState(grid.areas); // draggable state

//   const moveSection = (fromIndex, toIndex) => {
//     const updated = [...gridAreas];
//     const [moved] = updated.splice(fromIndex, 1);
//     updated.splice(toIndex, 0, moved);
//     setGridAreas(updated);
//   };

//   const renderSection = (sectionName) => {
//     const SectionComponent = sectionComponents[sectionName];
//     return SectionComponent ? (
//       <div
//         className="resumeSection"
//         onClick={(e) => {
//           e.stopPropagation();
//           setSelectedSection(sectionName);
//         }}
//         style={{
//           border: selectedSection === sectionName ? "2px solid #fddb60" : "none",
//           padding: "10px",
//           borderRadius: "8px",
//           transition: "0.2s ease",
//         }}
//       >
//         <SectionComponent />
//       </div>
//     ) : null;
//   };

//   const numRows = grid.templateRows.split(" ").length;
//   const numCols = grid.templateColumns.split(" ").length;

//   const gridMatrix = Array.from({ length: numRows }, () =>
//     Array(numCols).fill(".")
//   );

//   gridAreas.forEach((area) => {
//     for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
//       for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
//         gridMatrix[row][col] = area.name;
//       }
//     }
//   });

//   const gridTemplateAreas = gridMatrix.map((row) => `"${row.join(" ")}"`).join(" ");

//   return (
//     <div
//       id="resume-view"
//       style={{
//         fontFamily,
//         fontSize,
//         background: colorScheme.background,
//         color: colorScheme.text,
//         gridTemplateColumns: grid.templateColumns,
//         gridTemplateRows: grid.templateRows,
//         rowGap: grid.rowGap,
//         columnGap: grid.columnGap,
//         display: "grid",
//         gridTemplateAreas,
//         ...cssVariables,
//       }}
//     >
//       {gridAreas.map((area, index) => (
//         <div key={area.name} style={{ gridArea: area.name }}>
//           <DraggableSection id={area.name} index={index} moveSection={moveSection}>
//             {area.sections.map((section) => (
//               <div key={section}>{renderSection(section)}</div>
//             ))}
//           </DraggableSection>
//         </div>
//       ))}
//     </div>
//   );
// }
