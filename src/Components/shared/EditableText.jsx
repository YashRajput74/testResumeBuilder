import { useState, useRef } from "react";
import { useResume } from "../../context/ResumeContext";

export default function EditableText({ value, onChange, className = "" }) {
    const [text, setText] = useState(value);
    const ref = useRef(null);
    const {style} = useResume();

    const handleBlur = () => {
        const newText = ref.current?.innerText?.trim() || "";
        if (newText !== value) {
            onChange(newText);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            ref.current.blur();
        }
    };

    return (
        <div
            ref={ref}
            className={`editable-text ${className}`}
            contentEditable
            suppressContentEditableWarning
            style={style?.contact?.content}
            onInput={(e) => setText(e.currentTarget.textContent)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
        >
            {text}
        </div>
    );
}
