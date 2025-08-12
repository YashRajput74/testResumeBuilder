
import { useEffect, useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./LayoutEditorModal.css";
import { useResume } from "../../context/ResumeContext";

const allSections = [
  "contact", "summary", "education", "workExperience", "skills",
  "projects", "organizations", "awards", "language", "strengths", "achievements", "certificates"
];

const formatAreaName = (name) =>
  name.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

export default function LayoutEditorModal({ isOpen, onClose }) {
  const {
    style,
    setSectionOrder,
    sectionOrder,
    customLayoutAreas,
    setCustomLayoutAreas,
  } = useResume();

  const modalRef = useRef();

  const originalGridAreas = customLayoutAreas || style?.layout?.grid?.areas || [];

  const [gridAreas, setGridAreas] = useState(() => {
    const copy = JSON.parse(JSON.stringify(originalGridAreas));
    const allowedNames = ["leftColumn", "rightColumn"];
    const filtered = copy.filter((a) => allowedNames.includes(a.name));

    const used = filtered.flatMap((a) => a.sections);
    const unused = allSections.filter((s) => !used.includes(s));

    return [...filtered, { name: "unused", sections: unused }];
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const copy = JSON.parse(JSON.stringify(originalGridAreas));
    const allowedNames = ["leftColumn", "rightColumn"];
    const filtered = copy.filter((a) => allowedNames.includes(a.name));

    const used = filtered.flatMap((a) => a.sections);
    const unused = allSections.filter((s) => !used.includes(s));

    setGridAreas((prev) => {
      const newGrid = [...filtered, { name: "unused", sections: unused }];
      return JSON.stringify(prev) !== JSON.stringify(newGrid) ? newGrid : prev;
    });
  }, [isOpen]);


  if (!isOpen || !style?.layout?.grid) return null;

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const updated = [...gridAreas];
    const sourceArea = updated.find((a) => a.name === source.droppableId);
    const destArea = updated.find((a) => a.name === destination.droppableId);

    const [moved] = sourceArea.sections.splice(source.index, 1);
    destArea.sections.splice(destination.index, 0, moved);

    setGridAreas(updated);
  };

  const handleApply = () => {
    const editedAreas = gridAreas.filter((a) =>
      ["leftColumn", "rightColumn"].includes(a.name)
    );
    const untouchedAreas = originalGridAreas.filter(
      (a) => !["leftColumn", "rightColumn"].includes(a.name)
    );

    const unusedArea = gridAreas.find((a) => a.name === "unused");

    const newLayout = [
      ...untouchedAreas,
      ...editedAreas,
      ...(unusedArea ? [unusedArea] : []),
    ];

    const newSectionsInLayout = newLayout.flatMap((a) => a.sections);
    const newSectionOrder = Array.from(
      new Set([...sectionOrder, ...newSectionsInLayout])
    );

    setSectionOrder(newSectionOrder);
    setCustomLayoutAreas(newLayout);
    onClose();
  };

  const StrictModeDroppable = ({ children, ...props }) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));
      return () => cancelAnimationFrame(animation);
    }, []);

    if (!enabled) return null;
    return <Droppable {...props}>{children}</Droppable>;
  };

  return (
    <div className="layoutEditorModalOverlay">
      <div className="layoutEditorModal" ref={modalRef}>
        <div className="modalContent">
          <h2>Edit Layout</h2>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="gridAreaPreview">
              {["leftColumn", "rightColumn", "unused"].map((areaName) => {
                const area = gridAreas.find((a) => a.name === areaName);
                if (!area) return null;

                return (
                  <div key={area.name} className="gridAreaBox">
                    <h4>{formatAreaName(area.name)}</h4>
                    <StrictModeDroppable droppableId={area.name}>
                      {(provided, snapshot) => (
                        <div
                          className={`droppableZone ${snapshot.isDraggingOver ? "dragOver" : ""}`}
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {area.sections.map((section, index) => (
                            <Draggable
                              key={section}
                              draggableId={String(section)}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`sectionItem ${snapshot.isDragging ? "dragging" : ""}`}
                                >
                                  {formatAreaName(section)}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </StrictModeDroppable>
                  </div>
                );
              })}
            </div>
          </DragDropContext>

          <div className="modalButtons">
            <button onClick={handleApply}>Apply</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
