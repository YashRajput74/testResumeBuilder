import Header from "./Components/Header";
import Hero from "./Components/Hero";
import TemplateSection from "./Components/TemplateSection";
import { templates } from "./data/templates";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleSelectTemplate = (template) => {
        const index = templates.indexOf(template);
        if (index !== -1) {
            navigate(`/resume/${index}`);
        }
    };

    return (
        <>
            <Header />
            <Hero />
            <TemplateSection
                templates={templates}
                onSelectTemplate={handleSelectTemplate}
            />
        </>
    );
}
