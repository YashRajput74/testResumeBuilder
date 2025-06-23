

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useResume } from '../../context/ResumeContext';

export default function Projects() {
  const { data, updateField, editMode, style } = useResume();

  const handleChange = (index, key, value) => {
    const updated = [...data.projects];
    updated[index][key] = value;
    updateField("projects", null, updated);
  };

  const handleBlur = (index, key, e) => {
    let value = e.target.innerText.trim();
    if (key === "Description" && value.includes("\n")) {
      value = value.split("\n");
    }
    handleChange(index, key, value);
  };

  const handleAdd = () => {
    const updated = [...data.projects, { Title: "New Project", Link: "", Description: "" }];
    updateField("projects", null, updated);
  };

  const handleRemove = (index) => {
    const updated = data.projects.filter((_, i) => i !== index);
    updateField("projects", null, updated);
  };

  return (
    <div className="projects" style={style?.projects?.box}>
      <h2 style={style?.projects?.heading}>Projects</h2>

      {data.projects.map((project, index) => (
        <div key={index} className="eachProject" style={style?.projects?.eachProject}>
          <h3 style={style?.projects?.title}>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "Title", e)}
            >
              {project.Title}
            </span>

            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="icon"
                size="sm"
                style={style?.projects?.icon}
              />
            </a>
          </h3>

          {editMode ? (
            <>
              <p
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleBlur(index, "Link", e)}
                style={{ ...style?.projects?.title }}
              >
                {project.Link}
              </p>

              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleBlur(index, "Description", e)}
                style={{ ...style?.projects?.description, whiteSpace: "pre-wrap" }}
              >
                {Array.isArray(project.Description)
                  ? project.Description.join("\n")
                  : project.Description}
              </div>

             
            </>
          ) : (
            <>
              {Array.isArray(project.Description) ? (
                <ul style={style?.projects?.list}>
                  {project.Description.map((point, i) => (
                    <li key={i} style={style?.projects?.listItem}>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={style?.projects?.description}>{project.Description}</p>
              )}
            </>
          )}
        </div>
      ))}

      {editMode && (
        <button
          onClick={handleAdd}
          style={{
            marginTop: "10px",
            border: "1px dashed gray",
            background: "none",
            padding: "5px 10px",
            cursor: "pointer"
          }}
        >
          + Add Project
        </button>
      )}
    </div>
  );
}
