
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useResume } from '../../context/ResumeContext';

export default function Projects() {
    const { data, style } = useResume();
    return (
        <div className="projects" style={style?.projects?.box}>
            <h2 style={style?.projects?.heading}>Projects</h2>
            {data.projects.map((project, index) => (
                <div className="eachProject" key={index} style={style?.projects?.eachProject}>
                    <h3 style={style?.projects?.title}>{project.Title}
                        <a href={project.Link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" size="sm"  style={style?.projects?.icon}/>
                        </a>
                    </h3>

                    {Array.isArray(project.Description) ? (
                        <ul style={style?.projects?.list}>
                            {project.Description.map((point, i) => (
                                <li key={i} style={style?.projects?.listItem}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        <p style={style?.projects?.description}>{project.Description}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
