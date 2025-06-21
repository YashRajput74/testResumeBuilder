
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

//                     {exp.Project && (
//                         <p className="project-title">Project: {exp.Project}</p>
//                     )}

//                     <p className="contributions-heading">Key Contributions:</p>

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


import { useResume } from "../../context/ResumeContext";

export default function WorkExperience() {
    const {data, style} = useResume();
    return (
        <div className="workExperience"  style={style?.workExpe?.box}>
            <h2 style={style?.workExpe?.heading}>Work Experience</h2>
            {data.experience.map((exp, index) => (
                <div className="workPlace" key={index}  style={style?.workExpe?.eachWorkPlace}>
                    <h3 style={style?.workExpe?.role}>{exp.Role}</h3>
                    <h4 style={style?.workExpe?.organization}> {exp.Organization}</h4>
                    <p style={style?.workExpe?.dates}>{exp.Location} | {exp["Start Date"]} - {exp["End Date"]}</p>
                    <ul style={style?.workExpe?.wholeList}>
                        {exp.Description.map((item, i) => <li key={i} style={style?.workExpe?.bullets}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}
