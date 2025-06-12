import TemplateSection from "../Resume/TemplateSection"
import templates from "../data1/templates"

 import { useNavigate } from "react-router-dom";

export default function Home(){

   const navigate = useNavigate();

   const handleSelectTemplate = (templateIndex) => {
       navigate(`/resume/${templateIndex}`);
   }


   return(
      <div>
        <h2>Choose Your Resume Template</h2>
            <TemplateSection
                templates={templates}
                onSelectTemplate={(template) =>
                    handleSelectTemplate(templates.indexOf(template))
                }
            />
      </div>

   )
}