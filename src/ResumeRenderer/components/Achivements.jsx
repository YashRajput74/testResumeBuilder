import { useResume } from "../../context/ResumeContext"

export default function Achievements() {
    const { data, style,editMode ,updateField } = useResume()

    const handleBlur = (key, e) => {
        const newValue = e.target.textContent;
        updateField('achive', key, newValue);
    };

    return (
        <div style={style?.achieve?.box}>
            <h2 contentEditable={editMode}
                suppressContentEditableWarning={true}
                onBlur={(e) => handleBlur(index, e)} style={style?.achieve?.heading}>Achievements</h2>
            {data.achievements.map((achievement, index) => (
                <div className="achievement" key={index} style={style?.achieve?.innerbox}>
                    <h3 contentEditable={editMode}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => handleBlur(index, e)} style={style?.achieve?.title}>{achievement.Title}</h3>
                    <p contentEditable={editMode}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => handleBlur(index, e)} style={style?.achieve?.content}>{achievement.Description}</p>
                </div>
            ))}
        </div>
    )
}