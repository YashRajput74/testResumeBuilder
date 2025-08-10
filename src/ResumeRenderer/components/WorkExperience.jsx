import { useResume } from "../../context/ResumeContext";

export default function WorkExperience() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();

    const viewType = viewTypes?.experience || "list";

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.experience];
        updated[index] = { ...updated[index], [key]: e.target.innerText.trim() };
        updateField("experience", null, updated);
    };

    const handleDescriptionBlur = (expIndex, descIndex, e) => {
        const updated = [...data.experience];
        const updatedDescription = [...updated[expIndex].description];
        updatedDescription[descIndex] = {
            ...updatedDescription[descIndex],
            text: e.target.innerText.trim(),
        };
        updated[expIndex] = {
            ...updated[expIndex],
            description: updatedDescription,
        };
        updateField("experience", null, updated);
    };

    return (
        <div
            className="workExperience resumeSection"
            onClick={() => setSelectedSection("experience")}
            style={{ ...style?.workExpe?.box, position: "relative" }}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.workExpe?.heading}
            >
                Work Experience
            </h2>

            {data.experience.map((exp, index) => (
                <div
                    className="workPlace"
                    key={exp.id || index}
                    style={style?.workExpe?.eachWorkPlace}
                >
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "role", e)}
                        style={style?.workExpe?.role}
                        dangerouslySetInnerHTML={{ __html: exp.role }}
                    />

                    <h4
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "organization", e)}
                        style={style?.workExpe?.organization}
                        dangerouslySetInnerHTML={{ __html: exp.organization }}
                    />

                    <h6
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "location", e)}
                        style={style?.workExpe?.dates}
                    >
                        {exp.location} | {exp.startDate} - {exp.endDate}
                    </h6>

                    {viewType === "list" ? (
                        <ul style={style?.workExpe?.wholeList}>
                            {exp.description?.map((item, i) => (
                                <li
                                    key={item.id || `desc-${i}`}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescriptionBlur(index, i, e)}
                                    style={{
                                        ...style?.workExpe?.bullets,
                                        listStyle: "none",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div>
                            {exp.description?.map((item, i) => (
                                <p
                                    key={item.id || `desc-${i}`}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescriptionBlur(index, i, e)}
                                    style={{
                                        marginBottom: "0.5rem",
                                        ...style?.workExpe?.bullets,
                                    }}
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
