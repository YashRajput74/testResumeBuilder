import { useResume } from "../../context/ResumeContext"

export default function Strengths() {
    const { data, style, editMode, updateField } = useResume()
    const handleBlur = ( key, e) => {
        const updated = [...data.strengths];
        updated[index][key] = e.target.innerText.trim();
        updateField(" strengths", null, updated);
    };


    return (
        <div style={style?.strength?.box}>
            <h2 contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleBlur(index, "Date", e)} style={style?.strength?.heading}>Strengths</h2>
            {data.strengths.map((strength, index) => (
                <div className="strength" key={index} style={style?.strength?.innerbox}>
                    <h3 contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleBlur(index, "Date", e)} style={style?.strength?.title}>{strength.Title}</h3>
                    <p contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleBlur(index, "Date", e)} style={style?.strength?.content}>{strength.Description}</p>
                </div>
            ))}
        </div>
    )
}