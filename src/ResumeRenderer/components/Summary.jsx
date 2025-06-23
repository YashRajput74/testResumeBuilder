
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
