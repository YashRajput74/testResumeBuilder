import { useResume } from "../../context/ResumeContext";

export default function Skills() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection, viewTypes } = useResume();

    const handleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedSkills = [...data.skills];
        updatedSkills[index] = { ...updatedSkills[index], text: newValue };
        updateField("skills", null, updatedSkills);
    };

    const viewType = viewTypes?.skills || "block";

    return (
        <div
            className="skills resumeSection"
            style={{ ...style?.skills?.box, position: "relative" }}
            onClick={() => setSelectedSection("skills")}
        >
            <h2 style={style?.skills?.heading}>Skills</h2>

            {viewType === "list" ? (
                <ul style={style?.skills?.wholeList}>
                    {data.skills.map((skill, index) => (
                        <li
                            key={skill.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.skills?.listItem}
                            dangerouslySetInnerHTML={{ __html: skill.text }}
                        />
                    ))}
                </ul>
            ) : (
                <div className="individualSkill" style={style?.skills?.everySkillBox}>
                    {data.skills.map((skill, index) => (
                        <span
                            key={skill.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.skills?.eachSkillBox}
                            dangerouslySetInnerHTML={{ __html: skill.text }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
