import { useResume } from "../../context/ResumeContext"

export default function Achievements() {
    const { data, style } = useResume()
    return (
        <div style={style?.achieve?.box}>
            <h2 style={style?.achieve?.heading}>Achievements</h2>
            {data.achievements.map((achievement, index) => (
                <div className="achievement" key={index} style={style?.achieve?.innerbox}>
                    <h3 style={style?.achieve?.title}>{achievement.Title}</h3>
                    <p style={style?.achieve?.content}>{achievement.Description}</p>
                </div>
            ))}
        </div>
    )
}