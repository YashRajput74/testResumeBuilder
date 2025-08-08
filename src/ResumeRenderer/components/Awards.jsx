import { useResume } from "../../context/ResumeContext";

export default function Awards() {
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
        const updated = [...data.awards];
        updated[index] = { ...updated[index], title: newValue };
        updateField("awards", null, updated);
    };

    const handleDescriptionBlur = (awardIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.awards];
        const updatedDescriptions = [...updated[awardIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[awardIndex] = {
            ...updated[awardIndex],
            description: updatedDescriptions,
        };
        updateField("awards", null, updated);
    };

    return (
        <div
            className="awards resumeSection"
            style={{ ...style?.award?.box, position: "relative" }}
            onClick={() => setSelectedSection("awards")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.award?.heading}
            >
                Honurs and awards
            </h2>

            {data.awards.map((award, awardIndex) => (
                <div
                    className="award"
                    key={award.id}
                    style={style?.award?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(awardIndex, e)}
                        style={style?.award?.title}
                        dangerouslySetInnerHTML={{ __html: award.title || "" }}
                    />

                    {award.description?.map((desc, descIndex) => (
                        <p
                            key={desc.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleDescriptionBlur(awardIndex, descIndex, e)}
                            style={style?.award?.content}
                            dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
