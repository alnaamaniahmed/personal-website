import React, {useState, useEffect,Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import Footer from './components/Footer';
import SplashPage from './pages/SplashPage';
import "./App.css";
const ParticlesComponent = lazy(() => import('./components/Particles'));
function App(){
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 800); 
        return () => clearTimeout(timer);
    }, []);

    const handleSplash = () => {
        setShowSplash(true);
        setTimeout(() => {
            setShowSplash(false);
        }, 800);
    };
    return(
        <Router>
            <Suspense fallback={<div>Loading Particles...</div>}>
                {!showSplash && <ParticlesComponent id="particles" />}
            </Suspense>
            <div className='main-cont'>
            {showSplash ? <SplashPage /> : (
                    <>
                        <NavBar onNavClick={handleSplash} />
                        <Routes>
                            <Route path="/" element={<HomePage />} exact />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/resume" element={<ResumePage />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </div>
        </Router>
    );
}
export default App;