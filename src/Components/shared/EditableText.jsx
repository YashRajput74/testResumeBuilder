import { useState, useRef } from "react";

export default function EditableText({ value, onChange, className = "" }) {
    const [text, setText] = useState(value);
    const ref = useRef(null);

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
            onInput={(e) => setText(e.currentTarget.textContent)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
        >
            {text}
        </div>
    );
}
