import { useResume } from "../../context/ResumeContext";

export default function Achievements() {
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
        const updated = [...data.achievements];
        updated[index] = { ...updated[index], title: newValue };
        updateField("achievements", null, updated);
    };

    const handleDescriptionBlur = (achievementIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.achievements];
        const updatedDescriptions = [...updated[achievementIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[achievementIndex] = {
            ...updated[achievementIndex],
            description: updatedDescriptions,
        };
        updateField("achievements", null, updated);
    };

    return (
        <div
            className="achievements resumeSection"
            style={{ ...style?.achieve?.box, position: "relative" }}
            onClick={() => setSelectedSection("achievements")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.achieve?.heading}
            >
                Achievements
            </h2>

            {data.achievements.map((achievement, achievementIndex) => (
                <div
                    className="achievement"
                    key={achievement.id}
                    style={style?.achieve?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(achievementIndex, e)}
                        style={style?.achieve?.title}
                        dangerouslySetInnerHTML={{ __html: achievement.title || "" }}
                    />

                    {achievement.description?.map((desc, descIndex) => (
                        <p
                            key={desc.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleDescriptionBlur(achievementIndex, descIndex, e)}
                            style={style?.achieve?.content}
                            dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
