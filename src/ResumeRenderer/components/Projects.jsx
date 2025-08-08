import { useResume } from '../../context/ResumeContext';

export default function Projects() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
    } = useResume();

    const handleFieldBlur = (index, key, e) => {
        const updated = [...data.projects];
        updated[index][key] = e.target.innerText.trim();
        updateField("projects", null, updated);
    };

    const handleDescBlur = (projIndex, descIndex, e) => {
        const updated = [...data.projects];
        updated[projIndex].description[descIndex].text = e.target.innerText.trim();
        updateField("projects", null, updated);
    };

    return (
        <div
            className="projects resumeSection"
            style={{ ...style?.projects?.box, position: "relative" }}
            onClick={() => setSelectedSection("projects")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.projects?.heading}
            >
                Projects
            </h2>

            {data.projects.map((project, index) => (
                <div
                    className="eachProject"
                    key={project.id || index}
                    style={style?.projects?.eachProject}
                >
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldBlur(index, "title", e)}
                        style={style?.projects?.title}
                        dangerouslySetInnerHTML={{ __html: project.title }}
                    />

                    <ul style={style?.projects?.list}>
                        {project.description?.map((point, i) => (
                            <li
                                key={point.id}
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleDescBlur(index, i, e)}
                                style={style?.projects?.listItem}
                                dangerouslySetInnerHTML={{ __html: point.text }}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
