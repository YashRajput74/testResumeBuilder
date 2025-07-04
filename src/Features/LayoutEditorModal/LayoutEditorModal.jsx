
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./LayoutEditorModal.css";
import { useResume } from "../../context/ResumeContext";

const allSections = [
    "avatar", "contact", "summary", "education", "workExperience", "skills",
    "projects", "organizations", "awards", "language", "strengths", "achievements"
];

export default function LayoutEditorModal({ isOpen, onClose }) {
    const { style, setSectionOrder, sectionOrder } = useResume();

    const layoutSections = style?.layout?.grid?.areas?.flatMap(a => a.sections) || [];
    const [sections, setSections] = useState(sectionOrder.length ? sectionOrder : layoutSections);

    if (!isOpen || !style?.layout?.grid) return null;

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(sections);
        const [moved] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, moved);
        setSections(items);
    };

    const handleApply = () => {
        setSectionOrder(sections);
        onClose();
    };

    const unusedSections = allSections.filter((s) => !sections.includes(s));

    return (
        <div className="layoutEditorModal">
            <div className="modalContent">
                <h2>Edit Layout</h2>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="sections">
                        {(provided) => (
                            <div className="sectionList" {...provided.droppableProps} ref={provided.innerRef}>
                                {sections.map((section, index) => (
                                    <Draggable key={section} draggableId={section} index={index}>
                                        {(provided) => (
                                            <div
                                                className="sectionItem"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <span>{section}</span>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                {unusedSections.length > 0 && (
                    <div className="unusedSections">
                        <h4>Add Sections:</h4>
                        {unusedSections.map((section) => (
                            <button key={section} onClick={() => setSections([...sections, section])}>
                                ➕ {section}
                            </button>
                        ))}
                    </div>
                )}

                <div className="modalButtons">
                    <button onClick={handleApply}>✅ Apply</button>
                    <button onClick={onClose}>❌ Cancel</button>
                </div>
            </div>
        </div>
    );
}
