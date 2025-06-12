// === src/data/resumeData.js ===
export const resumeData = {
  personal: {
    name: "John Doe",
    title: "Frontend Developer",
    summary: "Passionate developer with 3 years of experience."
  },
  sections: [
    {
      id: "experience",
      title: "Experience",
      items: [
        {
          role: "Intern",
          company: "Google",
          duration: "June 2022 - Aug 2022",
          details: "Worked on Material UI components"
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      items: [
        {
          degree: "B.Tech in CSE",
          school: "ABC University",
          year: "2023"
        }
      ]
    },
    {
      id: "skills",
      title: "Skills",
      items: ["React", "JavaScript", "CSS"]
    }
  ]
};

// === src/data/templates.js ===
export const templates = [
  { id: "classic", name: "Classic", thumbnail: "https://via.placeholder.com/100x120.png?text=Classic" },
  { id: "modern", name: "Modern", thumbnail: "https://via.placeholder.com/100x120.png?text=Modern" }
];

export const templateConfigs = {
  classic: {
    font: "Georgia, serif",
    primaryColor: "#000",
    order: ["personal", "experience", "education", "skills"]
  },
  modern: {
    font: "Arial, sans-serif",
    primaryColor: "#0077cc",
    order: ["personal", "skills", "experience", "education"]
  }
};

// === src/components/Header.js ===
export default function Header() {
  return (
    <header style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <h1>Resume Builder</h1>
    </header>
  );
}

// === src/components/TemplateCard.js ===
export default function TemplateCard({ template, onClick }) {
  return (
    <div onClick={onClick} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", cursor: "pointer" }}>
      <img src={template.thumbnail} alt={template.name} width="100" />
      <p>{template.name}</p>
    </div>
  );
}

// === src/components/TemplateList.js ===
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

// === src/components/templates/TemplateClassic.js ===
import { templateConfigs } from "../../data/templates";

export default function TemplateClassic({ data }) {
  const config = templateConfigs.classic;
  const personal = data?.personal || {};
  const sections = data?.sections || [];

  const orderedSections = config.order
    .map((key) => sections.find((s) => s.id === key))
    .filter(Boolean);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", fontFamily: config.font, color: config.primaryColor }}>
      <h1>{personal.name || ""}</h1>
      <h3>{personal.title || ""}</h3>
      <p>{personal.summary || ""}</p>

      {orderedSections.map((section) => (
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

// === src/components/templates/TemplateModern.js ===
import { templateConfigs } from "../../data/templates";

export default function TemplateModern({ data }) {
  const config = templateConfigs.modern;
  const personal = data?.personal || {};
  const sections = data?.sections || [];

  const orderedSections = config.order
    .map((key) => sections.find((s) => s.id === key))
    .filter(Boolean);

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", fontFamily: config.font, color: config.primaryColor }}>
      <h1>{personal.name}</h1>
      <h3>{personal.title}</h3>
      <p>{personal.summary}</p>

      {orderedSections.map((section) => (
        <div key={section.id} style={{ marginTop: "20px" }}>
          <h2 style={{ borderBottom: `2px solid ${config.primaryColor}` }}>{section.title}</h2>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// === src/components/ResumeTemplate.js ===
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

// === src/App.jsx ===
import { useState } from "react";
import { resumeData } from "./data/resumeData";
import Header from "./components/Header";
import ResumeTemplate from "./components/ResumeTemplate";
import TemplateList from "./components/TemplateList";

export default function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState("classic");

  return (
    <>
      <Header />
      <ResumeTemplate data={resumeData} templateId={selectedTemplateId} />
      <TemplateList onSelect={setSelectedTemplateId} />
    </>
  );
}
