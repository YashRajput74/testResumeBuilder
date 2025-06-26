import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useResume } from '../../context/ResumeContext';
import FloatingToolbarPro from '../../Pages/FloatingToolbarPro';

export default function Projects() {
    const {
        data,
        style,
        editMode,
        updateField,
        selectedSection,
        setSelectedSection,
    } = useResume();

    const handleBlur = (index, key, e) => {
        const updated = [...data.projects];
        updated[index][key] = e.target.innerText.trim();
        updateField("projects", null, updated);
    };

    const handleDescBlur = (index, i, e) => {
        const updated = [...data.projects];
        updated[index].Description[i].text = e.target.innerText.trim();
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

            {/* ✅ Floating Toolbar */}
            {selectedSection === "projects" && (
                <FloatingToolbarPro
                    sectionKey="projects"
                    position={{ top: "-45px", right: "20px" }}
                />
            )}

            {data.projects.map((project, index) => (
                <div
                    className="eachProject"
                    key={index}
                    style={style?.projects?.eachProject}
                >
                    <h3
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleBlur(index, "Title", e)}
                        style={style?.projects?.title}
                    >
                        {project.Title}
                        <a
                            href={project.Link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "8px" }}
                        >
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                className="icon"
                                size="sm"
                                style={style?.projects?.icon}
                            />
                        </a>
                    </h3>
                    <ul style={style?.projects?.list}>
                        {project.Description.map((point, i) => (
                            <li
                                key={point.id}
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleDescBlur(index, i, e)}
                                style={style?.projects?.listItem}
                            >
                                {point.text}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
