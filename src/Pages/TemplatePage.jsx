import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';
import Footer from '../Components/Footer/Footer';
import { ResumeProvider } from '../context/ResumeContext';
import ResumeRenderer from '../ResumeRenderer/ResumeRenderer';
import templateStyles from '../data/templateStyle';
import mockUserData from '../data/mockUserData';

export default function AllTemplatesPage() {
  const navigate = useNavigate();

  const [headshotFilter, setHeadshotFilter] = useState("");
  const [columnFilter, setColumnFilter] = useState("");

  const handleSelectTemplate = (template) => {
    navigate(`/resume/${template.id}`);
  };

  const filteredTemplates = templates.filter(template => {
    const matchesHeadshot =
      headshotFilter === "" ||
      (headshotFilter === "with" && template.isAvatar === "true") ||
      (headshotFilter === "without" && template.isAvatar === "false");

    const matchesColumn =
      columnFilter === "" ||
      (columnFilter === "one" && template.filteredColumn === "1") ||
      (columnFilter === "two" && template.filteredColumn === "2");

    return matchesHeadshot && matchesColumn;
  });

  return (
    <>
      <section className="allTemplatesPage">
        <Header />

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

              <select
                className="barBtn"
                value={headshotFilter}
                onChange={e => setHeadshotFilter(e.target.value)}
              >
                <option value="">Headshot </option>
                <option value="with">With Photo</option>
                <option value="without">Without Photo</option>
              </select>

              <select
                className="barBtn"
                value={columnFilter}
                onChange={e => setColumnFilter(e.target.value)}
              >
                <option value="">Columns </option>
                <option value="one">One Column</option>
                <option value="two">Two Column</option>
              </select>
            </div>

            <div className="filterRight">
              <span className="colorLabel">Color:</span>
              <div className="colorOptions">
                {["#fff", "#1f1f1f", "#9b8c86", "#1c3d7d", "#4285f4", "#03b5c2", "#31816f", "#f89728", "#d14545"]
                  .map((color, i) => (
                    <div key={i} className="colorDot" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {filteredTemplates.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>No templates available.</p>
        ) : (
          <div className="allTemplatesGrid">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="templateCard"
                onClick={() => handleSelectTemplate(template)}
              >
                <div
                  className="templatePreview"
                  style={{
                    width: '100%',
                    height: '340px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#f5f5f5',
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
                      height: '297mm',
                      background: '#fff',
                      pointerEvents: 'none',
                      position: 'absolute',
                      top: '0.8rem',
                      left: "2.5rem",
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

                <p>{template.name}</p>

                <button
                  className="customizeBtn"
                  onClick={e => {
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

      <Footer />
    </>
  );
}

// import React from 'react';
// import Header from '../Components/Header/Header';
// import { useNavigate } from 'react-router-dom';
// import { templates } from '../data/templates';
// import Footer from '../Components/Footer/Footer';
// import { useState } from 'react';

// export default function AllTemplatesPage() {
//   const navigate = useNavigate();


//   const [headshotFilter, setHeadshotFilter] = useState("");
// const [columnFilter, setColumnFilter] = useState("");


//   const handleSelectTemplate = (template) => {
//     navigate(`/resume/${template.id}`);
//   };
  

//   return (
//     <>
//     <section className="allTemplatesPage">
//       <Header/>

//       <div className="templateIntro">
//         <div className="uprpara">
//         <h1>Pick the Template That Suits You Best</h1>
//         <p>Whether you're creative or corporate — we’ve got you covered!</p>
//         </div>
//       </div>

//   <div className="filterWrapper">
//   <div className="filterBar">
//     <div className="filterLeft">
//       <span className="filterLabel">Filters:</span>
//       <button className="barBtn">Headshot ▾</button>
//       <button className="barBtn">Graphics ▾</button>
//       <button className="barBtn">Columns ▾</button>
//     </div>
//     <div className="filterRight">
//       <span className="colorLabel">Color:</span>
//       <div className="colorOptions">
//         {["#fff", "#1f1f1f", "#9b8c86", "#1c3d7d", "#4285f4", "#03b5c2", "#31816f", "#f89728", "#d14545"].map(
//           (color, i) => (
//             <div key={i} className="colorDot" style={{ backgroundColor: color }} />
//           )
//         )}
//       </div>
//     </div>
//   </div>
// </div> 

 

   



//       {templates.length === 0 ? (
//         <p style={{ textAlign: 'center', marginTop: '2rem' }}>No templates available.</p>
//       ) : (
//         <div className="allTemplatesGrid">
//           {templates.map((template, index) => (
//             <div
//               key={index}
//               className="templateCard"
//               onClick={() => handleSelectTemplate(template)}
//             >
//              <div className="templatePreview">
//     <iframe
//      src={`${template.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
//       title={template.name}
//       className="previewIframe"
//     />
//   </div>

//               <p>{template.name}</p>

//               <button
//                 className="customizeBtn"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigate(`/resume/${template.id}?edit=true`);
//                 }}
//               >
//                 Customize
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//         <Footer/>

//     </>
//   );
// }


// import React, { useState } from 'react';
// import Header from '../Components/Header/Header';
// import { useNavigate } from 'react-router-dom';
// import { templates } from '../data/templates';
// import Footer from '../Components/Footer/Footer';

// export default function AllTemplatesPage() {
//   const navigate = useNavigate();

//   const [headshotFilter, setHeadshotFilter] = useState("");
//   const [columnFilter, setColumnFilter] = useState("");

//   const handleSelectTemplate = (template) => {
//     navigate(`/resume/${template.id}`);
//   };

//   const filteredTemplates = templates.filter((template) => {
//     const hasAvatar = template.layout.grid.areas.some(area =>
//       area.sections.includes("avatar")
//     );

//     const columnCount = template.layout.grid.templateColumns?.split(" ").length || 1;
//     const isOneColumn = columnCount === 1;
//     const isTwoColumn = columnCount <= 2;

//     const matchesHeadshot =
//       headshotFilter === "" ||
//       (headshotFilter === "with" && hasAvatar) ||
//       (headshotFilter === "without" && !hasAvatar);

//     const matchesColumn =
//       columnFilter === "" ||
//       (columnFilter === "one" && isOneColumn) ||
//       (columnFilter === "two" && isTwoColumn);

//     return matchesHeadshot && matchesColumn;
//   });

//   return (
//     <>
//       <section className="allTemplatesPage">
//         <Header />

//         <div className="templateIntro">
//           <div className="uprpara">
//             <h1>Pick the Template That Suits You Best</h1>
//             <p>Whether you're creative or corporate — we’ve got you covered!</p>
//           </div>
//         </div>

//         <div className="filterWrapper">
//           <div className="filterBar">
//             <div className="filterLeft">
//               <span className="filterLabel">Filters:</span>

//               <select
//                 className="barBtn"
//                 value={headshotFilter}
//                 onChange={(e) => setHeadshotFilter(e.target.value)}
//               >
//                 <option value="">Headshot ▾</option>
//                 <option value="with">With Photo</option>
//                 <option value="without">Without Photo</option>
//               </select>

//               <select
//                 className="barBtn"
//                 value={columnFilter}
//                 onChange={(e) => setColumnFilter(e.target.value)}
//               >
//                 <option value="">Columns ▾</option>
//                 <option value="one">One Column</option>
//                 <option value="two">Two Column</option>
//               </select>
//             </div>

//             <div className="filterRight">
//               <span className="colorLabel">Color:</span>
//               <div className="colorOptions">
//                 {["#fff", "#1f1f1f", "#9b8c86", "#1c3d7d", "#4285f4", "#03b5c2", "#31816f", "#f89728", "#d14545"].map(
//                   (color, i) => (
//                     <div key={i} className="colorDot" style={{ backgroundColor: color }} />
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {filteredTemplates.length === 0 ? (
//           <p style={{ textAlign: 'center', marginTop: '2rem' }}>No templates available.</p>
//         ) : (
//           <div className="allTemplatesGrid">
//             {filteredTemplates.map((template, index) => (
//               <div
//                 key={index}
//                 className="templateCard"
//                 onClick={() => handleSelectTemplate(template)}
//               >
//                 <div className="templatePreview">
//                   <iframe
//                     src={`${template.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
//                     title={template.name}
//                     className="previewIframe"
//                   />
//                 </div>

//                 <p>{template.name}</p>

//                 <button
//                   className="customizeBtn"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigate(`/resume/${template.id}?edit=true`);
//                   }}
//                 >
//                   Customize
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// }
// import React, { useState } from 'react';
// import Header from '../Components/Header/Header';
// import { useNavigate } from 'react-router-dom';
// import { templates } from '../data/templates';
// import Footer from '../Components/Footer/Footer';

// export default function AllTemplatesPage() {
//   const navigate = useNavigate();

//   // 🔧 States for filters
//   const [headshotFilter, setHeadshotFilter] = useState("");
//   const [columnFilter, setColumnFilter] = useState("");

//   const handleSelectTemplate = (template) => {
//     navigate(`/resume/${template.id}`);
//   };

//   // 🔄 Filter logic using new keys
//   const filteredTemplates = templates.filter(template => {
//     const matchesHeadshot =
//       headshotFilter === "" ||
//       (headshotFilter === "with" && template.isAvatar === "true") ||
//       (headshotFilter === "without" && template.isAvatar === "false");

//     const matchesColumn =
//       columnFilter === "" ||
//       (columnFilter === "one" && template.filteredColumn === "1") ||
//       (columnFilter === "two" && template.filteredColumn === "2");

//     return matchesHeadshot && matchesColumn;
//   });

//   return (
//     <>
//       <section className="allTemplatesPage">
//         <Header />
//         <div className="templateIntro">
//           <div className="uprpara">
//             <h1>Pick the Template That Suits You Best</h1>
//             <p>Whether you're creative or corporate — we’ve got you covered!</p>
//           </div>
//         </div>

//         {/* 🎯 Filter Bar */}
//         <div className="filterWrapper">
//           <div className="filterBar">
//             <div className="filterLeft">
//               <span className="filterLabel">Filters:</span>

//               <select
//                 className="barBtn"
//                 value={headshotFilter}
//                 onChange={e => setHeadshotFilter(e.target.value)}
//               >
//                 <option value="">Headshot </option>
//                 <option value="with">With Photo</option>
//                 <option value="without">Without Photo</option>
//               </select>

//               <select
//                 className="barBtn"
//                 value={columnFilter}
//                 onChange={e => setColumnFilter(e.target.value)}
//               >
//                 <option value="">Columns </option>
//                 <option value="one">One Column</option>
//                 <option value="two">Two Column</option>
//               </select>
//             </div>

//             <div className="filterRight">
//               <span className="colorLabel">Color:</span>
//               <div className="colorOptions">
//                 {["#fff", "#1f1f1f", "#9b8c86", "#1c3d7d", "#4285f4", "#03b5c2", "#31816f", "#f89728", "#d14545"]
//                   .map((color, i) => (
//                     <div key={i} className="colorDot" style={{ backgroundColor: color }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {filteredTemplates.length === 0 ? (
//           <p style={{ textAlign: 'center', marginTop: '2rem' }}>No templates available.</p>
//         ) : (
//           <div className="allTemplatesGrid">
//             {filteredTemplates.map((template, index) => (
//               <div
//                 key={template.id}
//                 className="templateCard"
//                 onClick={() => handleSelectTemplate(template)}
//               >
//                 <div className="templatePreview">
//                   <iframe
//                     src={`${template.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
//                     title={template.name}
//                     className="previewIframe"
//                   />
//                 </div>

//                 <p>{template.name}</p>

//                 <button
//                   className="customizeBtn"
//                   onClick={e => {
//                     e.stopPropagation();
//                     navigate(`/resume/${template.id}?edit=true`);
//                   }}
//                 >
//                   Customize
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// }
