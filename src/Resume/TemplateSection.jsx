// export default function TemplateSection({templates,onSelectTemplate}) {
//     return (
//         <section id="templates">
//             <h2>Choose a resume Template</h2>
//             <div className="templateGrid">
//                 {templates.map((template, index) => (
//                     <div key={index} className="templateCard" onClick={()=>{onSelectTemplate(template)}}>
//                         <div className="templatePreview">
//                             {template.sections.map((section, i) => (
//                                 <div
//                                     key={i}
//                                     style={{
//                                         width: section.style.width,
//                                         height: "10px",
//                                         background: section.style.background,
//                                         marginBottom: "4px"
//                                     }}
//                                 ></div>
//                             ))}
//                         </div>
//                         <p>{template.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }


import MiniTemplatePreview from './MiniTemplatePreview'; 
import mockUserData from '../data1/MockData';


export default function TemplateSection({ templates, onSelectTemplate }) {
    return (
        <section id="templates">
            <h2>Choose a resume Template</h2>
            <div className="templateGrid">
                {templates.map((template, index) => (
                    <div
                        key={index}
                        className="templateCard"
                        onClick={() => onSelectTemplate(template)}
                        style={{
                            cursor: "pointer",
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "8px",
                            background: "#f8f8f8",
                             height: "auto",
                        }}
                    >
                      <MiniTemplatePreview template={template} data={mockUserData} />

                        <p style={{ textAlign: "center", marginTop: "0.5rem" }}>{template.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
