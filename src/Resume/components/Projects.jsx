export default function Projects({ data }) {
    return (
        <div className="projects">
            <h2>Projects</h2>
            {data.projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.Title}</h3>
                    <p>{project.Description}</p>
                    <a href={project.Link} target="_blank" rel="noopener noreferrer">{project.Link}</a>
                </div>
            ))}
        </div>
    );
}