// import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
// import "./App.css"
// import HomePage from "./Pages/HomePage"
// import ResumePage from './Pages/ResumePage'

// export default function App() {
    

//     return (
//         <>
//         <Router>
//             <Routes>
//                 <Route path='/' element={<HomePage />} />
//                 <Route path='/resume/:templateId' element={<ResumePage/>}/>
//             </Routes>
//         </Router>
            
//         </>
//     )
// }

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from "./Pages/HomePage";
import ResumePage from './Pages/ResumePage';
import AllTemplatesPage from './Pages/TemplatePage'; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/resume/:templateId' element={<ResumePage />} />
        <Route path='/all-templates' element={<AllTemplatesPage />} /> 
      </Routes>
    </Router>
  );
}
