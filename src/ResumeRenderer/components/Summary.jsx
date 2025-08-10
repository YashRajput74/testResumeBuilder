import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Summary() {
    const { data, style, updateField, editMode, viewTypes } = useResume();
    const summaryRef = useRef();
    const viewType = viewTypes?.summary || "block";

    const handleDescBlur = (index, e) => {
        const newText = e.target.innerHTML.trim();
        const updated = [...data.summary];
        updated[index] = { ...updated[index], text: newText };
        updateField("summary", null, updated);
    };

    return (
        <div
            className="summary resumeSection"
            ref={summaryRef}
            style={{ ...style?.summary?.box, position: "relative" }}
        >
            <h2 style={style?.summary?.heading}>Summary</h2>

            {viewType === "list" ? (
                <ul style={style?.summary?.list}>
                    {data.summary.map((item, index) => (
                        <li
                            key={item.id || index}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleDescBlur(index, e)}
                            style={style?.summary?.listItem}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </ul>
            ) : (
                <div>
                    {data.summary.map((item, index) => (
                        <p
                            key={item.id || index}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleDescBlur(index, e)}
                            style={{ ...style?.summary?.content, outline: "none" }}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    ))}
                </div>
            )}

            <InlineToolbar editMode={editMode} containerRef={summaryRef} sectionName="summary" />
        </div>
    );
}
