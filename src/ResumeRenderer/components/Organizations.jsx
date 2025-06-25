

import { useResume } from "../../context/ResumeContext";

export default function Organizations() {
  const { data, style, editMode, updateField } = useResume();

  const handleblur = (index,key, e) => {
    const newValue = e.target.textContent;
    updateField('organizations', key, newValue);
  }
  return (
    <div className="organizations" style={style?.organiz?.box}>
      <h2 style={style?.organiz?.heading}>Organizations</h2>
      <div style={style?.organiz?.innerBox}>
        {data.organizations.map((org, index) => {
          return (
            <div key={index} style={style?.organiz?.eachOrganiz}>
              <p style={style?.organiz?.title} contentEditable={editMode}
                suppressContentEditableWarning={true}
                onBlur={(e) => handleblur(key, e)}>{org.Title}</p>
              <p style={style?.organiz?.date} contentEditable={editMode}
                suppressContentEditableWarning={true}
                onBlur={(e) => handleblur(key, e)}>{org.Date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}