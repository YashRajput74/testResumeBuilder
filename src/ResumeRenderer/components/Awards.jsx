
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
      <h2 style={style?.award?.heading}>Honours & Awards</h2>
      <div style={style?.award?.innerBox}>
        {data.awards.map((awr, index) => (
          <div key={index} style={style?.award?.eachAward}>
            <p style={style?.award?.title}>
              <span
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleBlur(index, "Title", e)}
              >
                {awr.Title}
              </span>
            </p>
            <p style={style?.award?.date}>
              <span
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleBlur(index, "Date", e)}
              >
                {awr.Date}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
