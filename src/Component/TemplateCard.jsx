// export default function TemplateCard({ template, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         border: "1px solid #ccc",
//         padding: "10px",
//         margin: "5px",
//         cursor: "pointer"
//       }}
//     >
//       <img src={template.thumbnail} alt={template.name} width="100" />
//       <p>{template.name}</p>
//     </div>
//   );
// }


export default function TemplateCard({ template, onClick }) {
  return (
    <div onClick={onClick} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", cursor: "pointer" }}>
      <img src={template.thumbnail} alt={template.name} width="100" />
      <p>{template.name}</p>
    </div>
  );
}
