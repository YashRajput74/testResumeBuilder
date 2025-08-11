import { useEffect, useRef, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import EntryControls from "./EntryControls";

export default function InlineToolbar({ editMode, containerRef, sectionName }) {
    const { style, viewTypes, setViewTypes } = useResume();

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [activeTagName, setActiveTagName] = useState(null);
    const toolbarRef = useRef(null);
    const savedSelection = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (!editMode || !containerRef?.current) return;

            const container = containerRef.current;

            const clickedInsideToolbar = toolbarRef.current?.contains(e.target);
            const clickedInsideContainer = container.contains(e.target);

            if (!clickedInsideContainer && !clickedInsideToolbar) {
                setVisible(false);
                setActiveTagName(null);
                return;
            }

            if (clickedInsideToolbar) return;

            const clickedTag = e.target.closest("p, span, li, h1, h2, h3, h4, h5, h6");
            if (!clickedTag || !clickedInsideContainer) {
                setVisible(false);
                setActiveTagName(null);
                return;
            }

            const sel = window.getSelection();
            const clickedRect = clickedTag.getBoundingClientRect();

            if (sel.rangeCount > 0) {
                const range = sel.getRangeAt(0);
                savedSelection.current = range;
            } else {
                const range = document.createRange();
                range.selectNodeContents(clickedTag);
                range.collapse(true);
                savedSelection.current = range;
            }

            const containerRect = container.getBoundingClientRect();
            setPosition({
                top: clickedRect.top - containerRect.top - 2,
                left: clickedRect.left - containerRect.left + clickedRect.width / 2,
            });

            setActiveTagName(clickedTag.tagName.toLowerCase());
            setVisible(true);
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [editMode, containerRef]);

    const restoreSelection = () => {
        const sel = window.getSelection();

        if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
            sel.removeAllRanges();
            if (savedSelection.current) {
                sel.addRange(savedSelection.current);
            }
        }
    };

    const exec = (command, value = null) => {
        restoreSelection();
        document.execCommand("styleWithCSS", false, true);
        document.execCommand(command, false, value);

        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            savedSelection.current = sel.getRangeAt(0);
        }
    };

    const toggleViewType = () => {
        if (!sectionName) return;
        setViewTypes((prev) => ({
            ...prev,
            [sectionName]: prev[sectionName] === "list" ? "block" : "list",
        }));
    };

    if (!visible || !editMode) return null;

    return (
        <div
            ref={toolbarRef}
            style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -100%)",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                zIndex: 9999,
                display: "flex",
                gap: "8px",
            }}
        >
            {["p", "span", "li"].includes(activeTagName) && (
                <>
                    <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("bold")}>
                        <b>B</b>
                    </button>
                    <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("italic")}>
                        <i>I</i>
                    </button>
                    <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("underline")}>
                        <u>U</u>
                    </button>
                    <button onMouseDown={(e) => e.preventDefault()} onClick={toggleViewType}>
                        🔁
                    </button>
                </>
            )}

            {["p", "span", "li", "h1", "h2", "h3", "h4", "h5", "h6"].includes(activeTagName) && (
                <button
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                        const url = prompt("Enter URL:");
                        if (url) exec("createLink", url);
                    }}
                >
                    🔗
                </button>
            )}
            <EntryControls tagName={activeTagName} savedSelection={savedSelection} sectionName={sectionName} />
        </div>
    );
}
