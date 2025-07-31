import { useRef } from "react";
import { useResume } from "../../context/ResumeContext";
import InlineToolbar from "../../Components/shared/InlineToolbar";

export default function Summary() {
    const { data, style, updateField, editMode } = useResume();
    const summaryRef = useRef();

    const handleBlur = (e) => {
        const newValue = e.target.innerHTML;
        updateField("summary", null, newValue);
    };

    return (
        <div
            className="summary"
            ref={summaryRef}
            style={{ ...style?.summary?.box, position: "relative" }}
        >
            <h2
               style={style?.summary?.heading}
            >
                Summary
            </h2>
            <p
                contentEditable={editMode}
                suppressContentEditableWarning={true}
                onBlur={handleBlur}
                style={{ ...style?.summary?.content, outline: "none" }}
                dangerouslySetInnerHTML={{ __html: data.summary }}
            />
            <InlineToolbar editMode={editMode} containerRef={summaryRef} />
        </div>
    );
}
