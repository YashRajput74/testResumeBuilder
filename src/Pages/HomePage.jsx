import Header from "../Components/Header/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer/Footer";
import TemplateSection from "../Components/TemplateSection";
import { templates } from "../data/templates";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

   const handleSelectTemplate = (templateId) => {
        const template = templates.find(t => t.id === templateId);
        if (template) {
            navigate(`/resume/${template.id}`);
        }
    };


    return (
        <>
            <Header />
            <Hero />
            <TemplateSection
                templates={templates}
            />
            <Footer/>
        </>
    );
}
