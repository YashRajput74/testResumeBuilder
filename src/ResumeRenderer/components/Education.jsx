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

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.education];
        updated[index][key] = e.target.innerText.trim();
        updateField("education", null, updated);
    };

    const handleDescBlur = (eduIndex, descIndex, e) => {
        const updated = [...data.education];
        updated[eduIndex].description[descIndex].text = e.target.innerText.trim();
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
            </h2>

            {data.education.map((edu, index) => (
                <div key={edu.id || index} style={style?.education?.eachSchool}>
                    <h3 style={style?.education?.name}>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "degree", e)}
                            dangerouslySetInnerHTML={{ __html: edu.degree }}
                        />
                        {" - "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "school", e)}
                            dangerouslySetInnerHTML={{ __html: edu.school }}
                        />
                    </h3>

                    <h4 style={style?.education?.city}>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "city", e)}
                        >
                            {edu.city}
                        </span>{" "}
                        |{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "startDate", e)}
                        >
                            {edu.startDate}
                        </span>{" "}
                        -{" "}
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "endDate", e)}
                        >
                            {edu.endDate}
                        </span>
                    </h4>

                    <ul style={style?.education?.list}>
                        {edu.description?.map((point, i) => (
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
