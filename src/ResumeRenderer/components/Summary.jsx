
import { useResume } from "../../context/ResumeContext"

export default function Summary() {
  const { data, style, updateField, editMode } = useResume();
  console.log('data', data);
  const handleBlur = (key, e) => {
    const newValue = e.target.textContent;
    updateField('summary', key, newValue);
  };


  return (
    <div className="summary" style={style?.summary?.box}>
      <h2 contentEditable={editMode}
        suppressContentEditableWarning={true}
        onBlur={(e) => handleBlur(index, e)} style={style?.summary?.heading}>Summary</h2>
      <p contentEditable={editMode}
        suppressContentEditableWarning={true}
        onBlur={(e) => handleBlur(index, e)} style={style?.summary?.content}>{data.summary}</p>
    </div>
  )
}


// import { useResume } from "../../context/ResumeContext";

// export default function Summary() {
//   const { data, style, updateField, editMode } = useResume();

//   const handleBlur = (key, e) => {
//     const htmlContent = e.currentTarget.innerHTML;
//     updateField("summary",'description', htmlContent);
//   };

//   return (
//     <div className="summary" style={style?.summary?.box}>
//       <h2
//         contentEditable={editMode}
//         suppressContentEditableWarning={true}
//         onBlur={(e) => handleBlur("title", e)}
//         dangerouslySetInnerHTML={{ __html: data.summary.title }}
//         style={style?.summary?.heading}
//       />

//       <p
//         contentEditable={editMode}
//         suppressContentEditableWarning={true}
//          onBlur={handleBlur}
//         dangerouslySetInnerHTML={{ __html: data.summary?.description || "" }}
//         style={style?.summary?.content}
//       />
//     </div>
//   );
// }
