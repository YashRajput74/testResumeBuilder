// // components/TemplateSidebar.jsx

// import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
// import { ResumeProvider } from "../context/ResumeContext";
// import templateStyles from "../data/templateStyle";

// export default function TemplateSidebar({ templates, selectedTemplate, onTemplateSelect, resumeData }) {
//     return (
//         <div
//             style={{
//                 width: "100%",
//                 padding: "1rem",
//                 paddingTop: "0.2rem",
//                 overflowY: "auto",
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "1rem",  
//             }}
//             className="hide-scroll"
//         >
//             <h3 style={{ width: "100%", marginBottom: "1rem", fontSize: '30px', textAlign: 'center' }}>Templates</h3>

//             {templates.map((tpl) => (
//                 <div
//                     key={tpl.id}
//                     onClick={() => onTemplateSelect(tpl.id)}
//                     style={{
//                         width: "48%",
//                         background: "#fff",
//                         border: tpl.id === selectedTemplate.id
//                             ? "2px solid #fddb60"
//                             : "1px solid #ccc",
//                         borderRadius: "8px",
//                         padding: "0.5rem",
//                         cursor: "pointer",
//                         boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                             height: "280px",
//                             overflow: "hidden",
//                             position: "relative",
//                             borderRadius: "6px",
//                             top: '0.8rem',
//                             right: '.2rem'
//                         }}
//                     >
//                         <div
//                             style={{
//                                 transform: "scale(0.26)",
//                                 transformOrigin: "top left",
//                                 width: "210mm",
//                                 height: "297mm",
//                                 pointerEvents: "none",
//                             }}
//                         >
//                             <ResumeProvider
//                                 key={tpl.id}
//                                 initialData={resumeData}
//                                 style={{
//                                     ...(templateStyles[tpl.id] || {}),
//                                     layout: tpl.layout,
//                                 }}
//                                 editModeFromURL={false}
//                                 templateId={tpl.id}
//                             >
//                                 <ResumeRenderer template={tpl} />
//                             </ResumeProvider>
//                         </div>
//                     </div>
//                     <p style={{ textAlign: "center", fontSize: "14px", marginTop: "0.5rem" }}>
//                         {tpl.name}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// }


import { useState } from "react";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import { ResumeProvider } from "../context/ResumeContext";
import templateStyles from "../data/templateStyle";
import "./TemplateSidebar.css";

export default function TemplateSidebar({ templates, selectedTemplate, onTemplateSelect, resumeData }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTemplate, setActiveTemplate] = useState(null);

    const handleTemplateClick = (tpl) => {
        setActiveTemplate(tpl);
        setDrawerOpen(true);
        onTemplateSelect(tpl.id);
    };

    return (
        <>
            <div className="template-container" style={{ maxHeight: "90vh", overflowY: "auto",background: "white", }}>
                <h3 className="template-title">Select a Template</h3>
                <div className="template-grid">
                    {templates.map((tpl) => (
                        <div
                            key={tpl.id}
                            className={`template-card ${tpl.id === selectedTemplate.id ? "active" : ""}`}
                            onClick={() => handleTemplateClick(tpl)}
                        >
                            <div className="template-preview">
                                <div className="template-inner">
                                    <ResumeProvider
                                        key={tpl.id}
                                        initialData={resumeData}
                                        style={{ ...(templateStyles[tpl.id] || {}), layout: tpl.layout }}
                                        editModeFromURL={false}
                                        templateId={tpl.id}
                                    >
                                        <ResumeRenderer template={tpl} />
                                    </ResumeProvider>
                                </div>
                            </div>
                            <p className="template-name">{tpl.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right-side drawer */}
            <div className={`template-drawer ${drawerOpen ? "open" : ""}`}>
                <button className="close-drawer" onClick={() => setDrawerOpen(false)}>×</button>
                {activeTemplate && (
                    <div className="drawer-content">
                        <h2>{activeTemplate.name}</h2>
                        <ResumeProvider
                            key={activeTemplate.id}
                            initialData={resumeData}
                            style={{ ...(templateStyles[activeTemplate.id] || {}), layout: activeTemplate.layout }}
                            editModeFromURL={false}
                            templateId={activeTemplate.id}
                        >
                            <ResumeRenderer template={activeTemplate} />
                        </ResumeProvider>
                    </div>
                )}
            </div>
        </>
    );
}


// export default function TemplateSidebar({ templates, selectedTemplate, onTemplateSelect, resumeData }) {
//     return (
//         <div
//             style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "1rem",
//                 background: "#fff",
//                 height: "100%", // fill available height
//                 boxShadow: "0 0 10px rgba(0,0,0,0.05)",
//             }}
//         >
//             <h3 style={{ marginBottom: "1rem", fontWeight: "600" }}>Choose Template</h3>

//             {/* Scrollable List */}
//             <div
//                 style={{
//                     maxHeight: "300px", // Shows approx 4 items
//                     overflowY: "auto",
//                     paddingRight: "8px",
//                     scrollbarWidth: "thin",
//                 }}
//             >
//                 {templates.map((template) => (
//                     <div
//                         key={template.id}
//                         onClick={() => onTemplateSelect(template.id)}
//                         style={{
//                             border:
//                                 selectedTemplate.id === template.id
//                                     ? "2px solid #4F46E5"
//                                     : "1px solid #ddd",
//                             borderRadius: "6px",
//                             marginBottom: "10px",
//                             padding: "10px",
//                             cursor: "pointer",
//                             backgroundColor:
//                                 selectedTemplate.id === template.id ? "#eef2ff" : "#f9f9f9",
//                             transition: "all 0.2s ease",
//                         }}
//                     >
//                         <img
//                             src={template.thumbnail}
//                             alt={template.name}
//                             style={{
//                                 width: "100%",
//                                 height: "auto",
//                                 objectFit: "cover",
//                                 borderRadius: "4px",
//                             }}
//                         />
//                         <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
//                             {template.name}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
