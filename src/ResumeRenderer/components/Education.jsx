export default function Education({ data }) {
    return (
        <div className="education">
            <h2>Education</h2>
            {data.education.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.Degree} - {edu.School}</h3>
                    <p>{edu.City} | {edu["Start Date"]} - {edu["End Date"]}</p>
                    <p>{edu.Description}</p>
                </div>
            ))}
        </div>
    );
}
