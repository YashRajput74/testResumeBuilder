import { useEffect, useRef, useState } from "react";

export default function InlineToolbar({ editMode, containerRef }) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
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
                return;
            }

            if (clickedInsideToolbar) return;

            const clickedP = e.target.closest("p");
            if (!clickedP || !clickedInsideContainer) {
                setVisible(false);
                if (clickedInsideContainer) {
                    alert("Click inside a paragraph to edit formatting.");
                }
                return;
            }

            const sel = window.getSelection();

            let rect;
            if (sel.rangeCount > 0 && !sel.isCollapsed) {
                const range = sel.getRangeAt(0);
                savedSelection.current = range;
                rect = range.getBoundingClientRect();
            } else {
                // No text selected – just clicked
                const clickedRect = clickedP.getBoundingClientRect();
                const range = document.createRange();
                range.selectNodeContents(clickedP);
                range.collapse(true);
                savedSelection.current = range;
                rect = clickedRect;
            }

            const containerRect = container.getBoundingClientRect();
            setPosition({
                top: rect.top - containerRect.top,
                left: rect.left - containerRect.left,
            });

            setVisible(true);
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [editMode, containerRef]);

    const restoreSelection = () => {
        const sel = window.getSelection();

        // Only restore if selection is collapsed or gone
        if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
            sel.removeAllRanges();
            if (savedSelection.current) {
                sel.addRange(savedSelection.current);
            }
        }
    };

    const exec = (command, value = null) => {
        restoreSelection(); // restore even if selection seems present (for safety)
        document.execCommand("styleWithCSS", false, true);
        document.execCommand(command, false, value);

        // update saved selection after execution
        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            savedSelection.current = sel.getRangeAt(0);
        }
    };

    if (!visible || !editMode) return null;

    return (
        <div
            ref={toolbarRef}
            style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                transform: "translateY(-100%)",
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
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("bold")}><b>B</b></button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("italic")}><i>I</i></button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("underline")}><u>U</u></button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("insertUnorderedList")}>•</button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => exec("insertOrderedList")}>1.</button>
            <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                    const url = prompt("Enter URL:");
                    if (url) exec("createLink", url);
                }}
            >🔗</button>
        </div>
    );
}
