import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import Footer from './components/Footer';
import "./App.css";

function App(){
    return(
        <Router>
            <div className='main-cont'>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;