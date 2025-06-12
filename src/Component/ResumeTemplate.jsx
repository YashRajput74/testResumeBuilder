// export default function ResumeTemplate({ data, templateId }) {
//   return (
//     <div style={{ border: "1px solid #000", padding: "20px", margin: "20px 0" }}>
//       <h2>{data.name}</h2>
//       <h4>{data.title}</h4>
//       <p>{data.summary}</p>

//       <h3>Experience</h3>
//       <ul>
//         {data.experience.map((exp, index) => (
//           <li key={index}>
//             <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
//             <br />
//             {exp.details}
//           </li>
//         ))}
//       </ul>
//     <h3>Projects</h3>
//     <ul>
//       {data.project.map((proj, index)=>{
//         <li key={index}>
//           {proj.name} 
//         </li>
//       })}
//     </ul>
//       <h3>Education</h3>
//       <ul>
//         {data.education.map((edu, index) => (
//           <li key={index}>
//             {edu.degree} at {edu.school} ({edu.year})
//           </li>
//         ))}
//       </ul>

//       <h3>Skills</h3>
//       <p>{data.skills.join(", ")}</p>
//     </div>
//   );
// }


import TemplateClassic from "./templates/TemplateClassic";
import TemplateModern from "./templates/TemplateModern";

const templateComponents = {
  classic: TemplateClassic,
  modern: TemplateModern
};

export default function ResumeTemplate({ data, templateId }) {
  const SelectedTemplate = templateComponents[templateId] || TemplateClassic;
  return <SelectedTemplate data={data} />;
}
