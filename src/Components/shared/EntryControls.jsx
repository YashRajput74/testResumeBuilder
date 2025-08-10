import { useResume } from "../../context/ResumeContext";

export default function EntryControls({ tagName, savedSelection, sectionName }) {
    const { addEntryAfter, removeEntry } = useResume();

    const handleAction = (action) => {
        const sel = window.getSelection();
        const range = sel.rangeCount > 0 ? sel.getRangeAt(0) : savedSelection.current;

        if (!range) return;

        let node = range.startContainer;

        // Traverse up to find element with data-id
        while (node && node !== document) {
            if (node.nodeType === 1 && node.getAttribute("data-id")) break;
            node = node.parentNode;
        }

        const id = node?.getAttribute("data-id");
        if (!id || !sectionName) return;

        if (action === "add") {
            addEntryAfter(sectionName, id);
        } else if (action === "remove") {
            removeEntry(sectionName, id);
        }
    };

    if (!["p", "li", "span"].includes(tagName)) return null;

    return (
        <>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => handleAction("add")}>➕</button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => handleAction("remove")}>➖</button>
        </>
    );
}
