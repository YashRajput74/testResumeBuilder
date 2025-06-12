// // MiniTemplatePreview.js
// export default function MiniTemplatePreview({ template, data }) {
//     const groupedSections = {};

//     template.sections.forEach((section) => {
//         if (!groupedSections[section.style.order]) {
//             groupedSections[section.style.order] = [];
//         }
//         groupedSections[section.style.order].push(section);
//     });

//     return (
//         <div
//             style={{
//                 fontFamily: template.fontFamily,
//                 border: "1px solid #ccc",
//                 padding: "8px",
//                 width: "200px",
//                 background: "#fff",
//             }}
//         >
//             {Object.entries(groupedSections).map(([order, sections]) => (
//                 <div key={order} style={{ display: "flex", gap: "4px", marginBottom: "4px" }}>
//                     {sections.map((section, i) => (
//                         <div
//                             key={i}
//                             style={{
//                                 flex: section.style.width === "100%" ? "1 1 100%" : `1 1 ${section.style.width}`,
//                                 background: section.style.background,
//                                 height: "10px"
//                             }}
//                         />
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }


// export default function MiniTemplatePreview({ template }) {
//     return (
//         <div style={{ background: "#eee", border: "1px solid #000", width: "200px", height: "100px" }}>
//             <p style={{ fontSize: "12px" }}>{template.name}</p>
//         </div>
//     );
// }


// export default function MiniTemplatePreview({ template, data }) {
//     const groupedSections = {};

//     template.sections.forEach((section) => {
//         if (!groupedSections[section.style.order]) {
//             groupedSections[section.style.order] = [];
//         }
//         groupedSections[section.style.order].push(section);
//     });

//     const renderContent = (sectionName, sectionData) => {
//     if (!sectionData) return null;
//     if (Array.isArray(sectionData)) {
//         return (
//             <ul style={{ fontSize: "10px", margin: 0, paddingLeft: "1em" }}>
//                 {sectionData.slice(0, 2).map((item, i) => (
//                     <li key={i}>
//                         {Object.values(item).join(", ")}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     if (typeof sectionData === "string") {
//         return <p style={{ fontSize: "10px", margin: 0 }}>{sectionData}</p>;
//     }

//     return null;
// };


//     return (
//         <div
//             style={{
//                 fontFamily: template.fontFamily,
//                 border: "1px solid #ccc",
//                 padding: "8px",
//                 width: "200px",
//                 background: "#fff",
//                 dynamicSize: 'true'
//             }}
//         >
//             {Object.entries(groupedSections).map(([order, sections]) => (
//                 <div key={order} style={{ display: "flex", gap: "4px", marginBottom: "4px" }}>
//                     {sections.map((section, i) => (
//                         <div
//                             key={i}
//                             style={{
//                                 flex: section.style.width === "100%" ? "1 1 100%" : `1 1 ${section.style.width}`,
//                                 background: section.style.background,
//                                 padding: "4px",
//                                 height: "auto"
//                             }}
//                         >
//                             <h4 style={{ fontSize: "10px", margin: 0 }}>
//                                 {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
//                             </h4>
//                             {renderContent(section.name, data[section.name])}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }
