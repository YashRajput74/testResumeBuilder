import { useParams, useNavigate } from "react-router-dom";
import ResumeRenderer from "../ResumeRenderer/ResumeRenderer";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import mockUserData from "../data/mockUserData";
import jsPDF from "jspdf";

export default function ResumePage() {
    const { templateId } = useParams();
    const navigate = useNavigate();
    const resumeRef = useRef();


    const[templates, setTemplates] = useState([]);
    const[userData, setUserData] = useState(null);

    useEffect(()=>{
        fetch('/api/templates')
        .then((res) => res.json())
        .then((data) => setTemplates(data.templates));

        fetch('/api/user-data')
        .then((res) => res.json())
        .then((data) => setUserData(data.data))
    },[])


    const template = templates[templateId];

    if (!template) return <p>Template not found</p>;

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

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginBottom: "1rem",
                    padding: "0.5rem 1rem",
                    background: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                }}
            >
                ← Back to Templates
            </button>

            <div ref={resumeRef} style={{ margin: "2rem auto", width: "fit-content" }}>
                <ResumeRenderer template={template} data={mockUserData} />
            </div>

            <button
                onClick={handleDownload}
                style={{
                    marginTop: "1.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "#3498DB",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    cursor: "pointer",
                }}
            >
                Download PDF
            </button>
        </div>
    );
}
