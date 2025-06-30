
import FloatingToolbarPro from "../../Pages/FloatingToolbarPro";
import { useResume } from "../../context/ResumeContext";

export default function Education() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
    } = useResume();

    const handleBlur = (index, key, e) => {
        const updated = [...data.education];
        updated[index][key] = e.target.innerText.trim();
        updateField("education", null, updated);
    };

    const handleDescBlur = (index, i, e) => {
        const updated = [...data.education];
        updated[index].Description[i].text = e.target.innerHTML.trim();
        updateField("education", null, updated);
    };

    return (
        <div
            className="education resumeSection"
            style={{ ...style?.education?.box, position: "relative" }}
            onClick={() => setSelectedSection("education")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.education?.heading}
            >
                Education
                {selectedSection === "education" && (
                    <FloatingToolbarPro sectionKey="education" />
                )}
            </h2>

            {data.education.map((edu, index) => (
                <div key={index} style={style?.education?.eachSchool}>
                    <h3 style={style?.education?.name}>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Degree", e)}
                        >
                            {edu.Degree}
                        </span>{" "}
                        -{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "School", e)}
                        >
                            {edu.School}
                        </span>
                    </h3>

                    <p style={style?.education?.city}>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "City", e)}
                        >
                            {edu.City}
                        </span>{" "}
                        |{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Start Date", e)}
                        >
                            {edu["Start Date"]}
                        </span>{" "}
                        -{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "End Date", e)}
                        >
                            {edu["End Date"]}
                        </span>
                    </p>

                    <ul style={style?.education?.list}>
                        {edu.Description?.map((point, i) => (
                            <li
                                key={point.id}
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleDescBlur(index, i, e)}
                                style={style?.education?.listItem}
                                dangerouslySetInnerHTML={{ __html: point.text }}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
