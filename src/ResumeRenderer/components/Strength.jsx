import { useResume } from "../../context/ResumeContext"

export default function Strengths() {
    const { data, style } = useResume()
    return (
        <div style={style?.strength?.box}>
            <h2 style={style?.strength?.heading}>Strengths</h2>
            {data.strengths.map((strength, index) => (
                <div className="strength" key={index} style={style?.strength?.innerbox}>
                    <h3 style={style?.strength?.title}>{strength.Title}</h3>
                    <p style={style?.strength?.content}>{strength.Description}</p>
                </div>
            ))}
        </div>
    )
}