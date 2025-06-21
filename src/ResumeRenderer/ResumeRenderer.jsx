// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Education from "./components/Education";
// import PersonalInfo from "./components/PersonalInfo";
// import "./ResumeRenderer.css";


// const sectionComponents = {
//     personalInfo: PersonalInfo,
//     education: Education,
//     workExperience: WorkExperience,
//     skills: Skills,
//     projects: Projects,
// };

// export default function ResumeRenderer({ template, data }) {
//     const { grid, fontFamily, fontSize, colorScheme } = template.layout;

//     const renderSection = (sectionName) => {
//         const SectionComponent = sectionComponents[sectionName];
//         return SectionComponent ? <SectionComponent data={data} /> : null;
//     };

//     const numRows = grid.templateRows.split(" ").length;
//     const numCols = grid.templateColumns.split(" ").length;

//     const gridMatrix = Array.from({ length: numRows }, () => Array(numCols).fill("."));

//     grid.areas.forEach((area) => {
//         for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
//             for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
//                 gridMatrix[row][col] = area.name;
//             }
//         }
//     });

//     const gridTemplateAreas = gridMatrix.map(row => `"${row.join(" ")}"`).join(" ");

//     return (
      
//         <div
//             id="resume-view"
//             className={`resume-view ${template.name.replace(/\s+/g, "-")}`}
//             style={{
//                 fontFamily,
//                 fontSize,
//                 background: colorScheme.background,
//                 color: colorScheme.text,
//                 display: "grid",
//                 gridTemplateColumns: grid.templateColumns,
//                 gridTemplateRows: grid.templateRows,
//                 gap: "1rem",
//                 gridTemplateAreas,
//             }}
//         >
//             {grid.areas.map((area, index) => (
//                 <div key={index} className={area.name}>
//                     {area.sections.map((section) => (
//                         <div key={section} className={`${section} section`}>
//                             {renderSection(section)}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }




// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Education from "./components/Education";
// import PersonalInfo from "./components/PersonalInfo";
// import "./ResumeRenderer.css";
// import Contact from "./components/Contact";
// import Strengths from "./components/Strengths";
// // import Achievements from "./components/Achievements";
// import Summary from "./components/Summary";
// import { ResumeContext } from "../context/ResumeContext";
// // import Organizations from "./components/Organizations";
// import templateStyles from "../data/templateStyle";

// const sectionComponents = {
//     personalInfo: PersonalInfo,
//     education: Education,
//     workExperience: WorkExperience,
//     skills: Skills,
//     projects: Projects,
//     contact: Contact,
//     summary: Summary,
//     strengths: Strengths,
//     // achievements: Achievements,
//     // organizations: Organizations
// };

// export default function ResumeRenderer({ template, data }) {
//     const templateId = String(template.id);
//     const style = templateStyles[templateId] || {};
//     const cssVariables = style.vars || {};
    
//     const contextValue = {
//         data,
//         style
//     };

//     const { grid, fontFamily, fontSize, colorScheme } = template.layout;

//     const renderSection = (sectionName) => {
//         const SectionComponent = sectionComponents[sectionName];
//         return SectionComponent ? <SectionComponent /> : null;
//     };

//     const numRows = grid.templateRows.split(" ").length;
//     const numCols = grid.templateColumns.split(" ").length;

//     const gridMatrix = Array.from({ length: numRows }, () => Array(numCols).fill("."));

//     grid.areas.forEach((area) => {
//         for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
//             for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
//                 gridMatrix[row][col] = area.name;
//             }
//         }
//     });

//     const gridTemplateAreas = gridMatrix.map(row => `"${row.join(" ")}"`).join(" ");

//     return (
//         <ResumeContext.Provider value={contextValue}>
//             <div
//                 id="resume-view"
//                 style={{
//                     fontFamily,
//                     fontSize,
//                     background: colorScheme.background,
//                     color: colorScheme.text,
//                     gridTemplateColumns: grid.templateColumns,
//                     gridTemplateRows: grid.templateRows,
//                     gridTemplateAreas,
//                     ...cssVariables
//                 }}
//             >
//                 {grid.areas.map((area, index) => (
//                     <div key={index} style={{ gridArea: area.name }}>
//                         {area.sections.map((section) => {
//                             /* const sectionStyle = style?.[section]?.box || {}; */
//                             return (
//                                 <div key={section} /* style={sectionStyle} */>
//                                     {renderSection(section)}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ))}
//             </div>
//         </ResumeContext.Provider>
//     );
// }




// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Education from "./components/Education";
// import PersonalInfo from "./components/PersonalInfo";
// import "./ResumeRenderer.css";
// import Contact from "./components/Contact";
// import Strengths from "./components/Strengths";
// import Summary from "./components/Summary";
// import templateStyles from "../data/templateStyle";
// import { useResume } from "../context/ResumeContext";
// const sectionComponents = {
//   personalInfo: PersonalInfo,
//   education: Education,
//   workExperience: WorkExperience,
//   skills: Skills,
//   projects: Projects,
//   contact: Contact,
//   summary: Summary,
//   strengths: Strengths,
// };

// export default function ResumeRenderer({ template }) {
//   const { data, style } = useResume();

//   const templateId = String(template.id);
//   const dynamicStyle = templateStyles[templateId] || {};
//   const cssVariables = dynamicStyle.vars || {};
//   const { grid, fontFamily, fontSize, colorScheme } = template.layout;

//   const renderSection = (sectionName) => {
//     const SectionComponent = sectionComponents[sectionName];
//     return SectionComponent ? <SectionComponent /> : null;
//   };

//   const numRows = grid.templateRows.split(" ").length;
//   const numCols = grid.templateColumns.split(" ").length;

//   const gridMatrix = Array.from({ length: numRows }, () => Array(numCols).fill("."));

//   grid.areas.forEach((area) => {
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
//         display: "grid",
//         gridTemplateAreas,
//         ...cssVariables,
//       }}
//     >
//       {grid.areas.map((area, index) => (
//         <div key={index} style={{ gridArea: area.name }}>
//           {area.sections.map((section) => (
//             <div key={section}>{renderSection(section)}</div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }



// ResumeRenderer.jsx

// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Education from "./components/Education";
// import PersonalInfo from "./components/PersonalInfo";
// import Contact from "./components/Contact";
// // import Strengths from "./components/Strengths";
// import Summary from "./components/Summary";
// import "./ResumeRenderer.css";

// import { useResume } from "../context/ResumeContext";

// const sectionComponents = {
//   personalInfo: PersonalInfo,
//   education: Education,
//   workExperience: WorkExperience,
//   skills: Skills,
//   projects: Projects,
//   contact: Contact,
//   summary: Summary,
//   // strengths: Strengths,
// };

// export default function ResumeRenderer({ template }) {
  
//   const { grid, fontFamily, fontSize, colorScheme } = template.layout;

//      const { data, style } = useResume();

//     const templateId = String(template.id);
//     const templatestyle = templatestyle[templateId] || {};
//     const cssVariables = templatestyle.vars || {};

//   const renderSection = (sectionName) => {
//     const SectionComponent = sectionComponents[sectionName];
//     return SectionComponent ? <SectionComponent /> : null;
//   };

//   const numRows = grid.templateRows.split(" ").length;
//   const numCols = grid.templateColumns.split(" ").length;

//   const gridMatrix = Array.from({ length: numRows }, () =>
//     Array(numCols).fill(".")
//   );

//   grid.areas.forEach((area) => {
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
//        style={{
//                     fontFamily,
//                     fontSize,
//                     background: colorScheme.background,
//                     color: colorScheme.text,
//                     gridTemplateColumns: grid.templateColumns,
//                     gridTemplateRows: grid.templateRows,
//                     rowGap: grid.rowGap,
//                     columnGap: grid.columnGap,
//                     gridTemplateAreas,
//                     ...cssVariables
//                 }}
//     >
//       {grid.areas.map((area, index) => (
//         <div key={index} style={{ gridArea: area.name }}>
//           {area.sections.map((section) => (
//             <div key={section}>{renderSection(section)}</div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }






import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import "./ResumeRenderer.css";

import { useResume } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle"; // ✅ Make sure this import is correct

const sectionComponents = {
  personalInfo: PersonalInfo,
  education: Education,
  workExperience: WorkExperience,
  skills: Skills,
  projects: Projects,
  contact: Contact,
  summary: Summary,
  // strengths: Strengths,
};

export default function ResumeRenderer({ template }) {
  const { data, style } = useResume(); // ✅ Context style (e.g., contact, skills...)

  const { grid, fontFamily, fontSize, colorScheme } = template.layout;

  const templateId = String(template.id);
  const templateStyle = templateStyles[templateId] || {}; // ✅ Fixed name
  const cssVariables = templateStyle.vars || {};          // ✅ Use templateStyle, not context style

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
        ...cssVariables, // ✅ This only applies --variables from templateStyles
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
