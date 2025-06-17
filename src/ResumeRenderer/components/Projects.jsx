// export default function Projects({ data }) {
//     return (
//         <div className="projects">
//             <h2>Projects</h2>
//             {data.projects.map((project, index) => (
//                 <div key={index}>
//                     <h3>{project.Title}</h3>
//                     <p>{project.Description}</p>
//                     <a href={project.Link} target="_blank" rel="noopener noreferrer">{project.Link}</a>
//                 </div>
//             ))}
//         </div>
//     );
// }


export default function Projects({ data }) {
    return (
        <div className="projects-section">
            <h2 className="section-title">PROJECTS</h2>
            {data.projects.map((project, index) => (
                <div key={index} className="project-item">
                    <h3 className="project-title">{project.Title}</h3>

                    <div className="project-links">
                        {project.GitHub && (
                            <a href={project.GitHub} target="_blank" rel="noopener noreferrer" className="link-button">
                                GitHub
                            </a>
                        )}
                        {project.LiveDemo && (
                            <a href={project.LiveDemo} target="_blank" rel="noopener noreferrer" className="link-button">
                                Live Demo
                            </a>
                        )}
                    </div>

                    <p className="project-description">{project.Description}</p>

                    {project.TechStack && (
                        <p className="tech-stack">
                            <strong>Tech Stack:</strong> {project.TechStack}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}


