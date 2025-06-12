
// export default function RenderData(){

//     return(
//         <>
//         <h1>ResumeBuilder</h1>
//         </>
//     )
// }
//  export default function RenderData({ data, template }) {
//   return (
//     <div style={{ fontFamily: template.fontFamily, color: template.primaryColor }}>
//       {template.layout.map(section => {
//         const sectionData = data.sections[section.id] || data[section.id];
//         if (!sectionData) return null;

//         return (
//           <div key={section.id} style={section.style}>
//             <h2>{sectionData.title || section.id.toUpperCase()}</h2>
//             {/* Render content based on section type */}
//             {Array.isArray(sectionData.items)
//               ? sectionData.items.map((item, index) => (
//                   <div key={index}>{JSON.stringify(item)}</div>
//                 ))
//               : <p>{sectionData.content || ""}</p>}
//           </div>
//         );
//       })}
//     </div>
//   );
// }



// RenderResume.jsx
// import React from "react";
// import { resumeData } from '../data1/Resumedata';
// import { templates } from "../data1/templates";

// export default function RenderResume({ selectedTemplateId = "classic" }) {
//   const template = templates.find(t => t.id === selectedTemplateId);

//   if (!template) {
//     return <div>Error: Template not found</div>;
//   }

//   const orderedSections = [...template.layout].sort((a, b) => a.order - b.order);

//   return (
//     <div style={{ fontFamily: template.fontFamily, color: template.primaryColor }}>
//       {orderedSections.map(section => {
//         const sectionData = resumeData.sections[section.id] || resumeData[section.id];
//         if (!sectionData) return null;

//         return (
//           <div key={section.id} style={section.style}>
//             <h2>{sectionData.title || section.id.toUpperCase()}</h2>
//             {Array.isArray(sectionData.items) ? (
//               <ul>
//                 {sectionData.items.map((item, index) => (
//                   <li key={index}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{sectionData.content || ""}</p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }



export default function ResumeRenderer({ template, data }) {

    const groupedSections = {};

    template.sections.forEach((section) => {
        if (!groupedSections[section.style.order]) {
            groupedSections[section.style.order] = [];
        }
        groupedSections[section.style.order].push(section);
    });

    const renderContent = (sectionName, sectionData) => {
        if (Array.isArray(sectionData)) {
            return sectionData.map((item, i) => (
                <div key={i} style={{ marginBottom: "1rem" }}>
                    {Object.entries(item).map(([field, value]) => (
                        <p key={field}><strong>{field}:</strong> {value}</p>
                    ))}
                </div>
            ));
        } 
        else {
            return <p>{sectionData}</p>;
        }
    };

    return (
        <div
            style={{
                fontFamily: template.fontFamily,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
                maxWidth: "900px",
                margin: "auto"
            }}
        >
            {Object.entries(groupedSections).map(([order, sections]) => (
                <div
                    key={order}
                    style={{
                        display: "flex",
                        gap: "1rem",
                        width: "100%",
                    }}
                >
                    {sections.map((section) => (
                        <div
                            key={section.name}
                            style={{
                                ...section.style,
                                flex: section.style.width === "100%" ? "1 1 100%" : `1 1 ${section.style.width}`,
                            }}
                        >
                            <h3 style={template.headingStyle}>
                                {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                            </h3>
                            {renderContent(section.name, data[section.name])}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}