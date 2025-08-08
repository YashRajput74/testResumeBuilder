import { useResume } from "../../context/ResumeContext";

export default function Organizations() {
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
        const updated = [...data.organizations];
        updated[index] = { ...updated[index], title: newValue };
        updateField("organizations", null, updated);
    };

    const handleDescriptionBlur = (organizationIndex, descIndex, e) => {
        const newValue = e.target.innerHTML.trim();
        const updated = [...data.organizations];
        const updatedDescriptions = [...updated[organizationIndex].description];
        updatedDescriptions[descIndex] = {
            ...updatedDescriptions[descIndex],
            text: newValue,
        };
        updated[organizationIndex] = {
            ...updated[organizationIndex],
            description: updatedDescriptions,
        };
        updateField("organizations", null, updated);
    };

    return (
        <div
            className="organizations resumeSection"
            style={{ ...style?.organiz?.box, position: "relative" }}
            onClick={() => setSelectedSection("organizations")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.organiz?.heading}
            >
                Organizations
            </h2>

            {data.organizations.map((organization, organizationIndex) => (
                <div
                    className="organization"
                    key={organization.id}
                    style={style?.organiz?.innerbox}
                >
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTitleBlur(organizationIndex, e)}
                        style={style?.organiz?.title}
                        dangerouslySetInnerHTML={{ __html: organization.title || "" }}
                    />

                    {organization.description?.map((desc, descIndex) => (
                        <p
                            key={desc.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleDescriptionBlur(organizationIndex, descIndex, e)}
                            style={style?.organiz?.content}
                            dangerouslySetInnerHTML={{ __html: desc.text || "" }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
