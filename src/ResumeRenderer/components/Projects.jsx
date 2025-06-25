

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// import { useResume } from '../../context/ResumeContext';
// import FloatingToolbarPro from '../../Pages/FloatingToolbarPro';

// export default function Projects() {
//   const { data, style, editMode, updateField,selectedSection, setSelectedSection  } = useResume();

//   const showToolbar = selectedSection === 'Projects';

//   const handleBlur = (index, key, e) => {
//     const updated = [...data.project];
//     updated[index][key] = e.target.innerText.trim();
//     updateField('project', null, updated);
//   };
//   return (
//     <div className="projects" style={style?.projects?.box}
//      onClick={() => setSelectedSection("Projects")}
//     >
//       <h2 contentEditable={editMode}
//         suppressContentEditableWarning
//         onBlur={(e) => handleBlur(index, "Title", e)} style={style?.projects?.heading}>Projects</h2>
        
//         {showToolbar && (
//           <FloatingToolbarPro sectionKey="Projects" position={{ top: "-45px", right: "20px" }} />
//         )}
//       {data.projects.map((project, index) => (
//         <div className="eachProject" key={index} style={style?.projects?.eachProject}>
//           <h3 contentEditable={editMode}
//             suppressContentEditableWarning
//             onBlur={(e) => handleBlur(index, "Title", e)} style={style?.projects?.title}>{project.Title}
//             <a contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleBlur(index, "Title", e)} href={project.Link} target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" size="sm" style={style?.projects?.icon} />
//             </a>
//           </h3>

//           {Array.isArray(project.Description) ? (
//             <ul style={style?.projects?.list}>
//               {project.Description.map((point, i) => (
//                 <li contentEditable={editMode}
//                   suppressContentEditableWarning
//                   onBlur={(e) => handleBlur(index, "Title", e)} key={i} style={style?.projects?.listItem}>{point}</li>
//               ))}
//             </ul>
//           ) : (
//             <p contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleBlur(index, "Title", e)} style={style?.projects?.description}>{project.Description}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// import { useResume } from '../../context/ResumeContext';
// import FloatingToolbarPro from '../../Pages/FloatingToolbarPro';
// export default function Projects() {
//   const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

//   const showToolbar = selectedSection === "projects";

//   const handleBlur = (index, key, e) => {
//     const updated = [...data.project];
//     updated[index][key] = e.target.innerText.trim();
//     updateField("projects", null, updated);
//   };

//   return (
//     <div
//       className="projects resumeSection"
//       style={style?.projects?.box}
//       onClick={() => setSelectedSection("projects")}
//     >
//       <h2
//         contentEditable={editMode}
//         suppressContentEditableWarning
//         onBlur={(e) => handleBlur(0, "Title", e)}
//         style={style?.projects?.heading}
//       >
//         Projects
//       </h2>

//       {showToolbar && (
//         <FloatingToolbarPro sectionKey="projects" position={{ top: "-45px", right: "20px" }} />
//       )}

//       {data.projects.map((project, index) => (
//         <div className="eachProject" key={index} style={style?.projects?.eachProject}>
//           <h3
//             contentEditable={editMode}
//             suppressContentEditableWarning
//             onBlur={(e) => handleBlur(index, "Title", e)}
//             style={style?.projects?.title}
//           >
//             {project.Title}
//             <a
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleBlur(index, "Link", e)}
//               href={project.Link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" size="sm" style={style?.projects?.icon} />
//             </a>
//           </h3>
// {selectedSection === "projects" && <div style={{position: "absolute", top: "-30px", right: "0", background: "red", color: "#fff", padding: "5px 10px"}}>Toolbar Test ✅</div>}

//           {Array.isArray(project.Description) ? (
//             <ul style={style?.projects?.list}>
//               {project.Description.map((point, i) => (
//                 <li
//                   key={i}
//                   contentEditable={editMode}
//                   suppressContentEditableWarning
//                   onBlur={(e) => {
//                     const updated = [...data.projects];
//                     updated[index].Description[i] = e.target.innerText.trim();
//                     updateField("projects", null, updated);
//                   }}
//                   style={style?.projects?.listItem}
//                 >
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => handleBlur(index, "Description", e)}
//               style={style?.projects?.description}
//             >
//               {project.Description}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


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
    updated[index].Description[i] = e.target.innerText.trim();
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

          {Array.isArray(project.Description) ? (
            <ul style={style?.projects?.list}>
              {project.Description.map((point, i) => (
                <li
                  key={i}
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleDescBlur(index, i, e)}
                  style={style?.projects?.listItem}
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "Description", e)}
              style={style?.projects?.description}
            >
              {project.Description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
