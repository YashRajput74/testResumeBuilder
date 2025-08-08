import { useResume } from "../../context/ResumeContext";

export default function Certificates() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.certifications];
        updated[index][key] = e.target.innerText.trim();
        updateField("certifications", null, updated);
    };

    const handleDescBlur = (certIndex, descIndex, e) => {
        const updated = [...data.certifications];
        updated[certIndex].description[descIndex].text = e.target.innerText.trim();
        updateField("certifications", null, updated);
    };

    return (
        <div
            className="certificates resumeSection"
            style={{ ...style?.certificate?.box, position: "relative" }}
            onClick={() => setSelectedSection("certifications")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.certificate?.heading}
            >
                Certificates
            </h2>

            <div style={style?.certificate?.innerBox}>
                {data.certifications.map((cert, index) => (
                    <div key={cert.id || index} style={style?.certificate?.eachcertificate}>
                        <h3
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "title", e)}
                            style={style?.certificate?.title}
                            dangerouslySetInnerHTML={{ __html: cert.title }}
                        />

                        <h4
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "organization", e)}
                            style={style?.certificate?.organiz}
                            dangerouslySetInnerHTML={{ __html: cert.organization }}
                        />

                        <h5
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleFieldBlur(index, "date", e)}
                            style={style?.certificate?.date}
                            dangerouslySetInnerHTML={{ __html: cert.date }}
                        />

                        <ul style={style?.certificate?.list}>
                            {cert.description?.map((point, i) => (
                                <li
                                    key={point.id}
                                    contentEditable={editMode}
                                    suppressContentEditableWarning
                                    onBlur={(e) => handleDescBlur(index, i, e)}
                                    style={style?.certificate?.listItem}
                                    dangerouslySetInnerHTML={{ __html: point.text }}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
