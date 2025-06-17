
export default function Education({ data }) {
    return (
        <div className="education-section">
            <h2 className="section-title">EDUCATION</h2>
            {data.education.map((edu, index) => (
                <div key={index} className="education-item">
                    <h3 className="degree">{edu.Degree} <span className="school"> {edu.School}</span></h3>
                    <p className="location-date">
                        {edu["Start Date"]} – {edu["End Date"]}
                    </p>
                    {/* {edu.Description && <p className="description">{edu.Description}</p>} */}
                </div>
            ))}
        </div>
    );
}

