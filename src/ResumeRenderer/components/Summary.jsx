// import EditableRichTextArea from "../../EditableFields/EditableRichTextArea"


// export default function Summary({data}){
//     return (
//         <div>
//             <h2>Summary</h2>
//             <p>{data.summary}</p>
//         </div>
//     )
// }


// import { useResume } from '../../context/ResumeContext';

// import EditableRichTextArea from '../../EditableFields/EditableRichTextArea';

// export default function Summary() {
//   const { style } = useResume();

//   return (
//     <div style={style?.summary?.box}>
//       <h2 style={style?.summary?.heading}>Summary</h2>
//       <EditableRichTextArea
//         section={null}      
//         field="summary"
//         rows={5}
//         style={style?.summary?.text}
//       />
//     </div>
//   );
// }


// src/ResumeRenderer/components/Summary.jsx
import { useResume } from '../../context/ResumeContext';
import EditableRichTextArea from '../../EditableFields/EditableRichTextArea';

export default function Summary() {
  const { style } = useResume();

  return (
    <div style={style?.summary?.box}>
      <h2 style={style?.summary?.heading}>Summary</h2>
      <EditableRichTextArea
        section={null}            // ✅ Since summary is a string at root
        field="summary"
        rows={5}
        style={style?.summary?.content} // ✅ match this with your template style key
      />
    </div>
  );
}
