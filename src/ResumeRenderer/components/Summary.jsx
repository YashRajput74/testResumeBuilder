
import { useResume } from "../../context/ResumeContext"

export default function Summary() {
  const { data, style, updateField, editMode } = useResume();
  console.log('data', data);
  const handleBlur = (key, e) => {
    const newValue = e.target.innerHTML;
    updateField('summary', key, newValue);
  };


  return (
    <div className="summary" style={style?.summary?.box}>
      <h2 contentEditable={editMode}
        suppressContentEditableWarning={true}
        onBlur={(e) => handleBlur(index, e)} style={style?.summary?.heading}>Summary</h2>
      <p contentEditable={editMode}
        suppressContentEditableWarning={true}
        onBlur={(e) => handleBlur(index, e)} style={style?.summary?.content}
    dangerouslySetInnerHTML={{__html: data.summary}}        
        >
          
          </p>
    </div>
  )
}

