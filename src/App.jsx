import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import "./App.css"
import HomePage from "./HomePage"
import ResumePage from './ResumePage'

export default function App() {
    

    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/resume/:templateId' element={<ResumePage/>}/>
            </Routes>
        </Router>
            
        </>
    )
}