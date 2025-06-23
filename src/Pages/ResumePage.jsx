
import { useParams, useNavigate } from "react-router-dom";
import { ResumeProvider } from "../context/ResumeContext";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSearchParams } from "react-router-dom";
import Toolbar from "./Toolbar"; 
import templateStyles from "../data/templateStyle";
import { templates } from "../data/templates";
import Toolbarr from "./Toolbarr";

export default function ResumePage() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const resumeRef = useRef();
  const [searchParams] = useSearchParams();
  const editModeFromURL = searchParams.get("edit") === "true";

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => {
        const found = data.templates.find((t) => t.id === Number(templateId));
        setSelectedTemplate(found);
      });

    fetch("/api/user-data")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, [templateId]);

  const handleTemplateSwitch = (newId) => {
    const newTemplate = templates.find((t) => t.id === newId);
    if (newTemplate) {
      setSelectedTemplate(newTemplate);
    }
  };

  const handleDownload = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("my-resume.pdf");
    });
  };

  if (!selectedTemplate || !userData) {
    return <p style={{ textAlign: "center", paddingTop: "2rem" }}>Loading template...</p>;
  }

  const dynamicStyle = templateStyles[selectedTemplate.id] || {};
  const savedData = JSON.parse(localStorage.getItem("resumeData"));
  const resumeData = savedData || userData;

  return (
    <ResumeProvider
      initialData={resumeData}
      style={dynamicStyle}
      editModeFromURL={editModeFromURL}
    >
      <div className="templateSectionn" style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            padding: "1rem",
            borderRight: "1px solid #ccc",
            height: "auto",
          
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>Templates</h3>
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="templateCardd"
              style={{
                border:
                  tpl.id === selectedTemplate.id
                    ? "2px solid #fddb60"
                    : "1px solid rgba(255,255,255,0.6)",
              }}
              onClick={() => handleTemplateSwitch(tpl.id)}
            >
              <img
                src={tpl.thumbnail}
                alt={tpl.name}
                className="templatePreview"
              />
              <p>{tpl.name}</p>
            </div>
          ))}
        </div>

        <div style={{ flexGrow: 1, padding: "2rem", textAlign: "center" }}>
          <button
            onClick={() => navigate("/")}
            className="btnSecondary"
            style={{ marginBottom: "1rem" }}
          >
            ← Back to Templates
          </button>

          <Toolbarr />
          <Toolbar/>


          <div
            ref={resumeRef}
            style={{ margin: "2rem auto", width: "fit-content" }}
          >
            <ResumeRenderer template={selectedTemplate} />
          </div>

          <button
            onClick={handleDownload}
            className="btnPrimary"
            style={{ marginTop: "1rem" }}
          >
            Download PDF
          </button>
        </div>
      </div>
    </ResumeProvider>
  );
}
