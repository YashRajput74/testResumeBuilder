import { useRef, useEffect } from "react";
import { useResume } from "../../context/ResumeContext";

export default function EditableText({ value, onChange, className = "", link = "" }) {
    const ref = useRef(null);
    const { style, editMode } = useResume();

    useEffect(() => {
        if (ref.current && ref.current.innerText !== value) {
            ref.current.innerText = value;
        }
    }, [value]);

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

    if (!editMode) {
        return link ? (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`editable-text ${className}`}
                style={style?.contact?.anchor}
            >
                {value}
            </a>
        ) : (
            <span className={`editable-text ${className}`} style={style?.contact?.content}>
                {value}
            </span>
        );
    }

    return (
        <div
            ref={ref}
            className={`editable-text ${className}`}
            contentEditable
            suppressContentEditableWarning
            style={style?.contact?.content}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            dangerouslySetInnerHTML={{ __html: value }}
        />
    );
}
