
import './Header/Header.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TemplateSection({ templates }) {
  const navigate = useNavigate();

  const handleSelectTemplate = (templateId) => {
    navigate(`/resume/${templateId}`);
  };

  return (
    <section id="templates" className="templateSection">
      <h2 className='heading'>Choose a Resume Template</h2>
      <div className="templateScroll">
        {templates.map((template, index) => (
          <div
            key={index}
            className="templateCard"
            onClick={() => handleSelectTemplate(template.id)}
          >
            <div className="templatePreview">
              <div className="line long"></div>
              <div className="line medium"></div>
              <div className="line short"></div>
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

      <div className="seeAllWrapper">
        <button className="btnPrimary" onClick={() => navigate("/all-templates")}>
          View All Templates
        </button>
      </div>
    </section>
  );
}
