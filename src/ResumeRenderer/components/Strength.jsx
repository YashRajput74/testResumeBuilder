import { useResume } from "../../context/ResumeContext";

export default function Strengths() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
    } = useResume();

    const handleTitleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.strengths];
        updated[index] = { ...updated[index], title: newValue };
        updateField("strengths", null, updated);
    };

    const handleDescriptionBlur = (strengthIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.strengths];
        const updatedDescriptions = [...updated[strengthIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[strengthIndex] = {
            ...updated[strengthIndex],
            description: updatedDescriptions,
        };
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

            {data.strengths.map((strength, strengthIndex) => (
                <div
                    className="strength"
                    key={strength.id}
                    style={style?.strength?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(strengthIndex, e)}
                        style={style?.strength?.title}
                        dangerouslySetInnerHTML={{ __html: strength.title || "" }}
                    />

                    {strength.description?.map((desc, descIndex) => (
                        <p
                            key={desc.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleDescriptionBlur(strengthIndex, descIndex, e)}
                            style={style?.strength?.content}
                            dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
