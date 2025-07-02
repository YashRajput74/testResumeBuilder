import './Header/Header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResumeProvider } from '../context/ResumeContext';
import ResumeRenderer from '../ResumeRenderer/ResumeRenderer';
import templateStyles from '../data/templateStyle';
import mockUserData from '../data/mockUserData';

export default function TemplateSection({ templates }) {
  const navigate = useNavigate();

  const handleSelectTemplate = (templateId) => {
    navigate(`/resume/${templateId}`);
  };

  return (
    <section id="templates" className="templateSection">
      <h2 className="heading">Choose a Resume Template</h2>

      <div className="templateScroll">
        {templates.map((template, index) => (
          <div
            key={index}
            className="templateCard"
            onClick={() => handleSelectTemplate(template.id)}
            style={{
              width: '250px',
              minHeight: '400px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div
              className="templatePreview"
              style={{
                width: '100%',
                height: '320px',
                overflow: 'hidden',
                position: 'relative',
                background: '#f7f7f7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  transform: 'scale(0.28)',
                  transformOrigin: 'top left',
                  width: '210mm',
                  height: '350mm',
                  background: '#fff',
                  pointerEvents: 'none',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                <ResumeProvider
                  initialData={mockUserData}
                  style={templateStyles[template.id] || {}}
                  editModeFromURL={false}
                >
                  <ResumeRenderer template={template} />
                </ResumeProvider>
              </div>
            </div>

            <p style={{ textAlign: 'center', fontWeight: '500', padding: '0.5rem 0' }}>
              {template.name}
            </p>

            <button
              className="customizeBtn"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/resume/${template.id}?edit=true`);
              }}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                margin: '0 auto 1rem',
                display: 'block',
                cursor: 'pointer',
              }}
            >
              Customize
            </button>
          </div>
        ))}
      </div>
       <div className="seeAllWrapper">
        <button className="btnPrimary" onClick={() => navigate('/all-templates')}>
          View All Templates
        </button>
      </div>
    </section>
  );
}


// import './Header/Header.css';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ResumeProvider } from '../context/ResumeContext';
// import ResumeRenderer from '../ResumeRenderer/ResumeRenderer';
// import templateStyles from '../data/templateStyle';
// import mockUserData from '../data/mockUserData';

// export default function TemplateSection({ templates }) {
//   const navigate = useNavigate();

//   const handleSelectTemplate = (templateId) => {
//     navigate(`/resume/${templateId}`);
//   };

//   return (
//     <section id="templates" className="templateSection">
//       <h2 className="heading">Choose a Resume Template</h2>

//       <div className="templateScroll">
//         {templates.map((template, index) => (
//           <div
//             key={index}
//             className="templateCard"
//             onClick={() => handleSelectTemplate(template.id)}
//             style={{
//               width: '250px',
//               minHeight: '360px',
//               background: '#fff',
//               borderRadius: '10px',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//               overflow: 'hidden',
//               transition: 'transform 0.2s',
//               cursor: 'pointer',
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//           >
//             <div
//               className="templatePreview"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 overflow: 'hidden',
//                 position: 'relative',
//                 background: '#f7f7f7',
//               }}
//             >
//               <div
//                 style={{
//                   transform: 'scale(0.18)',
//                   transformOrigin: 'top left',
//                   width: '210mm',
//                   height: '297mm',
//                   background: '#fff',
//                   pointerEvents: 'none',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                 }}
//               >
//                 <ResumeProvider
//                   initialData={mockUserData}
//                   style={templateStyles[template.id] || {}}
//                   editModeFromURL={false}
//                 >
//                   <ResumeRenderer template={template} />
//                 </ResumeProvider>
//               </div>
//             </div>

//             <p style={{ textAlign: 'center', fontWeight: '500', padding: '0.5rem 0' }}>
//               {template.name}
//             </p>

//             <button
//               className="customizeBtn"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 navigate(`/resume/${template.id}?edit=true`);
//               }}
//               style={{
//                 backgroundColor: '#007bff',
//                 color: '#fff',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '6px',
//                 margin: '0 auto 1rem',
//                 display: 'block',
//                 cursor: 'pointer',
//               }}
//             >
//               Customize
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import './Header/Header.css';

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function TemplateSection({ templates }) {
//   const navigate = useNavigate();

//   const handleSelectTemplate = (templateId) => {
//     navigate(`/resume/${templateId}`);
//   };

//   return (
//     <section id="templates" className="templateSection">
//       <h2 className="heading">Choose a Resume Template</h2>

//       <div className="templateScroll">
//         {templates.map((template, index) => (
//           <div
//             key={index}
//             className="templateCard"
//             onClick={() => handleSelectTemplate(template.id)}
//           >
//             <div className="templatePreview">
//               <iframe
//                 src={`${template.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
//                 width="100%"
//                 height="100%"
//                 title={template.name}
//                 style={{
//                   border: '1px solid #ccc',
//                   borderRadius: '8px',
//                   boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//                   pointerEvents: 'none',

//                 }}
//               />
//             </div>

//             <p>{template.name}</p>

//             <button
//               className="customizeBtn"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 navigate(`/resume/${template.id}?edit=true`);
//               }}
//             >
//               Customize
//             </button>
//           </div>
//         ))}
//       </div>

      // <div className="seeAllWrapper">
      //   <button className="btnPrimary" onClick={() => navigate('/all-templates')}>
      //     View All Templates
      //   </button>
      // </div>
//     </section>
//   );
// }
// 