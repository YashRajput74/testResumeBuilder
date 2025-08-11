import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Education() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
        viewTypes,
    } = useResume();
    const educationRef = useRef();

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

    const viewType = viewTypes?.education || "list";

    return (
        <div
            className="education resumeSection"
            style={{ ...style?.education?.box, position: "relative" }}
            onClick={() => setSelectedSection("education")}
            ref={educationRef}
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
                    <h3 style={style?.education?.name} data-id={edu.id}>
                        <div
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "degree", e)}
                            dangerouslySetInnerHTML={{ __html: edu.degree }}
                        />
                        {" - "}
                        <div
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "school", e)}
                            dangerouslySetInnerHTML={{ __html: edu.school }}
                        />
                    </h3>

                    <h4 style={style?.education?.city} data-id={edu.id}>
                        <div
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "city", e)}
                        >
                            {edu.city}
                        </div>{" "}
                        |{" "}
                        <div
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "startDate", e)}
                        >
                            {edu.startDate}
                        </div>{" "}
                        -{" "}
                        <div
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "endDate", e)}
                        >
                            {edu.endDate}
                        </div>
                    </h4>

                    {viewType === "list" ? (
                        <ul style={style?.education?.list}>
                            {edu.description?.map((point, i) => (
                                <li
                                    key={point.id || i}
                                    data-id={point.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescBlur(index, i, e)}
                                    style={style?.education?.listItem}
                                    dangerouslySetInnerHTML={{ __html: point.text }}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div style={{ paddingLeft: "0.75rem", color: "red" }}>
                            {edu.description?.map((point, i) => (
                                <p
                                    key={point.id || i}
                                    data-id={point.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescBlur(index, i, e)}
                                    style={style?.education?.listItem}
                                    dangerouslySetInnerHTML={{ __html: point.text }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <InlineToolbar editMode={editMode} containerRef={educationRef} sectionName="education" />
        </div>
    );
}
