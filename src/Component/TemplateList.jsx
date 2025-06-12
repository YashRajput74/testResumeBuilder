// import { templates } from "../data/templates";
// import TemplateCard from "./TemplateCard";

// export default function TemplateList({ onSelect }) {
//   return (
//     <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
//       {templates.map((template) => (
//         <TemplateCard
//           key={template.id}
//           template={template}
//           onClick={() => onSelect(template.id)}
//         />
//       ))}
//     </div>
//   );
// }

import { templates } from "../data/templates";
import TemplateCard from "./TemplateCard";

export default function TemplateList({ onSelect }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} onClick={() => onSelect(template.id)} />
      ))}
    </div>
  );
}