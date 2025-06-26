import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Skills() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();//ye

    const handleBlur = (index, e) => {
        const newValue = e.target.textContent.trim();
        const updatedSkills = [...data.skills];
        updatedSkills[index] = newValue;
        updateField("skills", null, updatedSkills);
    };

    const showToolbar = selectedSection === "skills";//ye

    if (style.skills?.list) {
        return (
            <div
                className="skills resumeSection"
                style={{ ...style?.skills?.box, position: "relative" }}
                onClick={() => setSelectedSection("skills")} //ye
            >
                <h2 style={style?.skills?.heading}>Skills</h2>

                {showToolbar && (
                    <FloatingToolbarSimple sectionKey="skills" />
                )} {/* ye */}

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
                <h2 style={style?.skills?.heading}>Skills
                    {showToolbar && (
                        <FloatingToolbarSimple sectionKey="skills" />
                    )}
                </h2>

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

