import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function PersonalInfo() {
    const { data, style, editMode, updateField, viewTypes } = useResume();
    const personalRef = useRef();
    const viewType = viewTypes?.personalInfo || "block";

    const handleFieldBlur = (field, e) => {
        const value = e.target.innerHTML.trim();
        updateField(null, field, value);
    };

    const handleSummaryBlur = (index, e) => {
        const newText = e.target.innerHTML.trim();
        const updated = [...data.summary];
        updated[index] = { ...updated[index], text: newText };
        updateField("summary", null, updated);
    };

    return (
        <div
            className="personalInfo resumeSection"
            ref={personalRef}
            style={style?.personalInfo?.box}
        >
            <div style={style?.personalInfo?.name}>
                <div
                    contentEditable={editMode}
                    style={style?.personalInfo?.firstName}
                    suppressContentEditableWarning
                    onBlur={(e) => handleFieldBlur("firstName", e)}
                    dangerouslySetInnerHTML={{ __html: data.firstName }}
                />{" "}
                <div
                    contentEditable={editMode}
                    style={style?.personalInfo?.lastName}
                    suppressContentEditableWarning
                    onBlur={(e) => handleFieldBlur("lastName", e)}
                    dangerouslySetInnerHTML={{ __html: data.lastName }}
                />
            </div>

            <div
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleFieldBlur("position", e)}
                style={style?.personalInfo?.position}
                dangerouslySetInnerHTML={{ __html: data.position }}
            />

            {viewType === "list" ? (
                <ul style={style?.personalInfo?.list}>
                    {data.summary.map((item, index) => (
                        <li
                            key={item.id || index}
                            data-id={item.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleSummaryBlur(index, e)}
                            style={style?.personalInfo?.listItem}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </ul>
            ) : (
                <div style={style?.personalInfo?.summaryBox}>
                    {data.summary.map((item, index) => (
                        <p
                            key={item.id || index}
                            data-id={item.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleSummaryBlur(index, e)}
                            style={style?.personalInfo?.summaryContent}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </div>
            )}

            <InlineToolbar
                editMode={editMode}
                containerRef={personalRef}
                sectionName="summary"
            />
        </div>
    );
}
