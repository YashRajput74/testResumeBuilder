import { useParams, useNavigate } from "react-router-dom";
import templates from "../data1/templates";
import mockUserData from "../data1/MockData";
import ResumeRenderer from "../Resume/ResumeRenderer";
import { useRef } from "react"; //  capture the html dom
import html2canvas from 'html2canvas' // take a scrren shot (photo) of you resume.... 
import jsPDF from 'jspdf' /// make a real pdf file from the screenshot..



export default function ResumePage() {
  const { templateId } = useParams();
  const template = templates[templateId];
  const navigate = useNavigate();

  const resumeRef = useRef();
  if (!template) return <p>Template not found</p>;

  //downloadPDF

  const handleDownload = () => {
    const input = resumeRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF("p", "mm", "a4");
      //p = portrait

      //mm = millimeters for size

      //a4 = A4 paper size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;


      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('my-resume-pdf');
    })
  }

  return (
    <>
      <button onClick={() => navigate('/')}
        style={{
          margin: '1rem 0',
          padding: '6px, 12px',
          background: '#eee',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.9rem'
        }}

      >
        ← Back to Templates
      </button>
      <div>
        <div ref={resumeRef}>
          <ResumeRenderer template={template} data={mockUserData} />
        </div>

        <button onClick={handleDownload}
          style={{
            padding: '1rem',
            background: '#eee',
            marginLeft: '40rem',
            cursor: 'pointer'
          }}
        >
          print PDF
        </button>
      </div>


    </>
  );
}



