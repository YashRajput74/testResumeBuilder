






import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
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
};

export default function ResumeRenderer({ template }) {
  const { data, style } = useResume();

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
