
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';

export default function AllTemplatesPage() {
  const navigate = useNavigate();

  const handleSelectTemplate = (template) => {
    navigate(`/resume/${template.id}`);
  };

  return (
    <section className="allTemplatesPage">
      <div className="templateIntro">
        <div className="uprpara">Explore All Resume Templates</div>
        <h2>Pick the Template That Suits You Best</h2>
        <p>Whether you're creative or corporate — we’ve got you covered!</p>
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
                <div className="line long"></div>
                <div className="line medium"></div>
                <div className="line short"></div>
              </div>
              <p>{template.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

