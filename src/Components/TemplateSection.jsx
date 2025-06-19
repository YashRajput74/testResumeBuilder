// import './Header/Header.css'

// export default function TemplateSection({templates,onSelectTemplate}) {
//     return (
//         <section id="templates">
//             <h2>Choose a resume Template</h2>
//             <div className="templateGrid">
//                 {templates.map((template, index) => (
//                     <div key={index} className="templateCard" onClick={()=>{onSelectTemplate(template)}}>
//                         <div className="templatePreview">
                            
//                         </div>
//                         <p>{template.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }


import './Header/Header.css';

export default function HeroSectionWithTemplates({ templates, onSelectTemplate }) {
  return (
    <>

      <section id="templates" className="templateSection">
        {/* <div className="templateIntro">
          <div className="uprpara">
            Choose from modern templates designed for professionals
          </div>
          
          <p>Select the one that best suits your career style</p>
        </div> */}
<h2>Choose a Resume Template</h2>
        <div className="templateGrid">
          {templates.map((template, index) => (
            <div key={index} className="templateCard" onClick={() => onSelectTemplate(template)}>
              <div className="templatePreview">
                {/* Add preview design elements here */}
                <div style={{ backgroundColor: '#ddd', width: '80%', margin: '5px auto' }}></div>
                <div style={{ backgroundColor: '#ccc', width: '60%', margin: '5px auto' }}></div>
                <div style={{ backgroundColor: '#eee', width: '90%', margin: '5px auto' }}></div>
              </div>
              <p>{template.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}