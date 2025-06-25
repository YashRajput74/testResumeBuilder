
import { useResume } from "../../context/ResumeContext";

export default function Awards() {
  const { data, style, editMode, updateField } = useResume();

  if (!data?.awards) return null;

  const handleBlur = (index, key, e) => {
    const updated = [...data.awards];
    updated[index][key] = e.target.innerText.trim();
    updateField("awards", null, updated);
  };

  return (
    <div className="awards" style={style?.award?.box}>
      <h2 contentEditable={editMode}
        suppressContentEditableWarning
        onBlur={(e) => handleBlur(index, "Title", e)} style={style?.award?.heading}>Honours & Awards</h2>
      <div style={style?.award?.innerBox}>
        {data.awards.map((awr, index) => (
          <div key={index} style={style?.award?.eachAward}>
            <p contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "Title", e)} style={style?.award?.title}>

              {awr.Title}
            </p>
            <p contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "Title", e)} style={style?.award?.date}>

              {awr.Date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
