import { useResume } from "../../context/ResumeContext";

export default function Organizations() {
    const { data, style } = useResume();
    return (
        <div className="organizations" style={style?.organiz?.box}>
            <h2 style={style?.organiz?.heading}>Organizations</h2>
            <div style={style?.organiz?.innerBox}>
                {data.organizations.map((org, index) => {
                    return (
                        <div key={index} style={style?.organiz?.eachOrganiz}>
                            <p style={style?.organiz?.title}>{org.Title}</p>
                            <p style={style?.organiz?.date}>{org.Date}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}