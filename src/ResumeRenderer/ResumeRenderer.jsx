import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import "./ResumeRenderer.css";


const sectionComponents = {
    personalInfo: PersonalInfo,
    education: Education,
    workExperience: WorkExperience,
    skills: Skills,
    projects: Projects,
};

export default function ResumeRenderer({ template, data }) {
    const { grid, fontFamily, fontSize, colorScheme } = template.layout;

    const renderSection = (sectionName) => {
        const SectionComponent = sectionComponents[sectionName];
        return SectionComponent ? <SectionComponent data={data} /> : null;
    };

    const numRows = grid.templateRows.split(" ").length;
    const numCols = grid.templateColumns.split(" ").length;

    const gridMatrix = Array.from({ length: numRows }, () => Array(numCols).fill("."));

    grid.areas.forEach((area) => {
        for (let row = area.rowStart - 1; row < area.rowEnd - 1; row++) {
            for (let col = area.colStart - 1; col < area.colEnd - 1; col++) {
                gridMatrix[row][col] = area.name;
            }
        }
    });

    const gridTemplateAreas = gridMatrix.map(row => `"${row.join(" ")}"`).join(" ");

    return (
        <div
            id="resume-view"
            style={{
                fontFamily,
                fontSize,
                background: colorScheme.background,
                color: colorScheme.text,
                display: "grid",
                gridTemplateColumns: grid.templateColumns,
                gridTemplateRows: grid.templateRows,
                gap: "1rem",
                gridTemplateAreas,
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
