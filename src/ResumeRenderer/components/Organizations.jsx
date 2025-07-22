import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Organizations() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

    const handleBlur = (index, key, e) => {
        const updated = [...data.organizations];
        updated[index][key] = e.target.innerHTML.trim();
        updateField("organizations", null, updated);
    };

    return (
        <div
            className="organizations resumeSection"
            style={{ ...style?.organiz?.box, position: "relative" }}
            onClick={() => setSelectedSection("organizations")}
        >
            <h2 style={style?.organiz?.heading}>
                Organizations
                {selectedSection === "organizations" && editMode && (
                    <FloatingToolbarSimple sectionKey="organizations" position={{ top: "-45px", right: "20px" }} />
                )}
            </h2>

            <div style={style?.organiz?.innerBox}>
                {data.organizations.map((org, index) => (
                    <div key={index} style={style?.organiz?.eachOrganiz}>
                        <p
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Title", e)}
                            style={style?.organiz?.title}
                            dangerouslySetInnerHTML={{ __html: org.Title }}

                        >
                        </p>
                        <p
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(index, "Date", e)}
                            style={style?.organiz?.date}
                            dangerouslySetInnerHTML={{ __html: org.Date }}
                        >
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
