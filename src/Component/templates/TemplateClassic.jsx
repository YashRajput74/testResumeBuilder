// export default function TemplateClassic({ data }) {
//   return (
//     <div style={{ padding: "20px", border: "1px solid #ccc" }}>
//       <h1>{data.personal.name}</h1>
//       <h3>{data.personal.title}</h3>
//       <p>{data.personal.summary}</p>

//       {data.sections.map((section) => (
//         <div key={section.id}>
//           <h2>{section.title}</h2>
//           <ul>
//             {section.items.map((item, i) => (
//               <li key={i}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function TemplateClassic({ data }) {
  const personal = data?.personal || {};
  const sections = data?.sections || [];

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1>{personal.name || ""}</h1>
      <h3>{personal.title || ""}</h3>
      <p>{personal.summary || ""}</p>

      {sections.map((section) => (
        <div key={section.id}>
          <h2>{section.title}</h2>
          <ul>
            {(section.items || []).map((item, i) => (
              <li key={i}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}