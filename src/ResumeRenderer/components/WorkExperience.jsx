// export default function WorkExperience({ data }) {
//     return (
//         <div className="workExperience">
//             <h2>Work Experience</h2>
//             {data.experience.map((exp, index) => (
//                 <div key={index}>
//                     <h3>{exp.Role} - {exp.Organization}</h3>
//                     <p>{exp.Location} | {exp["Start Date"]} - {exp["End Date"]}</p>
//                     <ul>
//                         {exp.Description.map((item, i) => <li key={i}>{item}</li>)}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }


// export default function WorkExperience({ data }) {
//     return (
//         <div className="work-experience-section">
//             <h2 className="section-title">WORK EXPERIENCE</h2>
//             {data.experience.map((exp, index) => (
//                 <div key={index} className="experience-item">
//                     <h3 className="role">
//                         {exp.Role} <span className="organization">@ {exp.Organization}</span>
//                     </h3>
//                     <p className="location-date">
//                         {exp.Location} | {exp["Start Date"]} – {exp["End Date"]}
//                     </p>
//                     <ul className="description-list">
//                         {exp.Description.map((item, i) => (
//                             <li key={i}>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }


export default function WorkExperience({ data }) {
    return (
        <div className="work-experience-section">
            <h2 className="section-title">WORK EXPERIENCE</h2>
            {data.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h3 className="role">
                        {exp.Role} <span className="organization">@ {exp.Organization}</span>
                    </h3>
                    <p className="location-date">
                        {exp.Location} | {exp["Start Date"]} – {exp["End Date"]}
                    </p>

                    {exp.Project && (
                        <p className="project-title">Project: {exp.Project}</p>
                    )}

                    <p className="contributions-heading">Key Contributions:</p>

                    <ul className="description-list">
                        {exp.Description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
