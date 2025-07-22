import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Certificates() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

    const handleBlur = (index, key, e) => {
        const updated = [...data.certifications];
        updated[index][key] = e.target.innerHTML.trim();
        updateField("certifications", null, updated);
    };

    return (
        <div
            className="certificates resumeSection"
            style={{ ...style?.certificate?.box, position: "relative" }}
            onClick={() => setSelectedSection("certifications")}
        >
            <h2 style={style?.certificate?.heading}>
                Certificates
                {selectedSection === "certifications" && editMode && (
                    <FloatingToolbarSimple sectionKey="certifications" position={{ top: "-45px", right: "20px" }} />
                )}
            </h2>

            <div style={style?.certificate?.innerBox}>
                {data.certifications.map((cer, index) => (
                    <div key={index} style={style?.certificate?.eachcertificate}>
                        <p
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Title", e)}
                            style={style?.certificate?.title}
                            dangerouslySetInnerHTML={{ __html: cer.Title }}

                        >
                        </p>
                        <p
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Organization", e)}
                            style={style?.certificate?.organiz}
                            dangerouslySetInnerHTML={{ __html: cer.Organization }}
                        >
                        </p>
                        <p
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Date", e)}
                            style={style?.certificate?.date}
                            dangerouslySetInnerHTML={{ __html: cer.Date }}
                        >
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
