
import { useResume } from "../../context/ResumeContext";

export default function Education() {
    const { data, style } = useResume();
    return (
        <div className="education" style={style?.education?.box}>
            <h2 style={style?.education?.heading}>Education</h2>
            {data.education.map((edu, index) => (
                <div className="school" key={index} style={style?.education?.eachSchool}>
                    <h3 style={style?.education?.name}>{edu.Degree} - {edu.School}</h3>
                    <p style={style?.education?.city}>{edu.City} | {edu["Start Date"]} - {edu["End Date"]}</p>
                    <p style={style?.education?.description}>{edu.Description}</p>
                </div>
            ))}
        </div>
    );
}
