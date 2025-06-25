
import React from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';
import Footer from '../Components/Footer/Footer';

export default function AllTemplatesPage() {
  const navigate = useNavigate();

  const handleSelectTemplate = (template) => {
    navigate(`/resume/${template.id}`);
  };

  return (
    <>
    <section className="allTemplatesPage">
      <Header/>

      <div className="templateIntro">
        <div className="uprpara">
        <h1>Pick the Template That Suits You Best</h1>
        <p>Whether you're creative or corporate — we’ve got you covered!</p>
        </div>
      </div>

  <div className="filterWrapper">
  <div className="filterBar">
    <div className="filterLeft">
      <span className="filterLabel">Filters:</span>
      <button className="barBtn">Headshot ▾</button>
      <button className="barBtn">Graphics ▾</button>
      <button className="barBtn">Columns ▾</button>
    </div>
    <div className="filterRight">
      <span className="colorLabel">Color:</span>
      <div className="colorOptions">
        {["#fff", "#1f1f1f", "#9b8c86", "#1c3d7d", "#4285f4", "#03b5c2", "#31816f", "#f89728", "#d14545"].map(
          (color, i) => (
            <div key={i} className="colorDot" style={{ backgroundColor: color }} />
          )
        )}
      </div>
    </div>
  </div>
</div>


      {templates.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>No templates available.</p>
      ) : (
        <div className="allTemplatesGrid">
          {templates.map((template, index) => (
            <div
              key={index}
              className="templateCard"
              onClick={() => handleSelectTemplate(template)}
            >
             <div className="templatePreview">
    <iframe
     src={`${template.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
      title={template.name}
      className="previewIframe"
    />
  </div>

              <p>{template.name}</p>

              <button
                className="customizeBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/resume/${template.id}?edit=true`);
                }}
              >
                Customize
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
        <Footer/>

    </>
  );
}
