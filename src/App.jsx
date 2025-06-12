
// import React from "react";
// // import RenderResume from "./Resume/ResumeRenderer.jsxx";
// import ResumeRenderer from "./Resume/ResumeRenderer.jsx";
// // import RenderResume from "./RenderResume";

// function App() {
//   return (
//     <div>
//       <h1>My Dynamic Resume</h1>
//       <ResumeRenderer/>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react"
// import "./App.css"
// // import Header from "./Components/Header"
// // import Hero from "./Components/Hero"
// import TemplateSection from "./Resume/TemplateSection"
// import ResumeRenderer from "./Resume/ResumeRenderer"
// import templates from "./data1/templates"
// import mockUserData from "./data1/MockData"

// export default function App() {
//     const [selectedTemplate, setSelectedTemplate] = useState(null);
//     const handleSelectTemplate = (template) => {
//         setSelectedTemplate(template);
//         setTimeout(() => {
//             document
//                 .getElementById("resume-view")
//                 ?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     return (
//         <>
//             {/* <Header />
//             <Hero /> */}
//             <TemplateSection templates={templates}
//                 onSelectTemplate={handleSelectTemplate} />
//             {selectedTemplate && (
//                 <ResumeRenderer template={selectedTemplate} data={mockUserData} />
//             )}
//         </>
//     )
// }



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ResumePage from './Pages/ResumePages'

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resume/:templateId' element={<ResumePage />} />
            </Routes>
        </Router>
    )
}