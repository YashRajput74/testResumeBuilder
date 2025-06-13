export default function WorkExperience({ data }) {
    return (
        <div className="workExperience">
            <h2>Work Experience</h2>
            {data.experience.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.Role} - {exp.Organization}</h3>
                    <p>{exp.Location} | {exp["Start Date"]} - {exp["End Date"]}</p>
                    <ul>
                        {exp.Description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}
