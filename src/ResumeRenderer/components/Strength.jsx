
import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Strengths() {
  const {
    data,
    style,
    editMode,
    updateField,
    selectedSection,
    setSelectedSection,
  } = useResume();

  const handleBlur = (index, key, e) => {
    const updated = [...data.strengths];
    updated[index][key] = e.target.innerHTML.trim();
    updateField("strengths", null, updated);
  };

  return (
    <div
      className="strengths resumeSection"
      style={{ ...style?.strength?.box, position: "relative" }}
      onClick={() => setSelectedSection("strengths")}
    >
      <h2
        contentEditable={editMode}
        suppressContentEditableWarning
        style={style?.strength?.heading}
      >
        Strengths
      </h2>

      {selectedSection === "strengths" && editMode && (
        <FloatingToolbarSimple
          sectionKey="strengths"
          position={{ top: "-45px", right: "20px" }}
        />
      )}

      {data.strengths.map((strength, index) => (
        <div
          className="strength"
          key={index}
          style={style?.strength?.innerbox}
        >
          <h3
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(index, "Title", e)}
            style={style?.strength?.title}
            dangerouslySetInnerHTML={{ __html: strength.Title }}/>
          <p
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(index, "Description", e)}
            style={style?.strength?.content}
            dangerouslySetInnerHTML={{ __html: strength.Description }}
          />
        </div>
      ))}
    </div>
  );
}
