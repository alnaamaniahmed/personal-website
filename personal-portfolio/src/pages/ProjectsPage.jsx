import React from 'react';
import '../projectPage.css';
import quickCash from '../quickCashProject.png';
import simonGame from '../simonGame.png';
import personalWebProject from '../personalWebProject.png';
import artByYou from '../artByYou.png';
import {ReactComponent as GitHubIcon} from '../icons/github.svg';

function ProjectsPage(props){
    return(
    <div className='mainFlexContainer'>
        <div className='projectFlexContainer'>
            <h1 className='projectHeader'>Recent <span className='projectSpan'>Projects</span></h1>
            <p className='projectParagraph'>A glimpse into my recent work</p>
        </div>
        <div className='cardGrid'>
            <div className='card'>
                <div className='cardFlexCont'>
                    <img src={personalWebProject}/>
                    <h2>Personal <span className='projectSpan'>Website</span></h2>
                    <p className='cardPara'>Designed and developed a personal website using React.js, HTML, and CSS, showcasing a portfolio of projects and skills. The site features responsive design and interactive elements, effectively demonstrating proficiency in modern web development practices.</p>
                    <button className='githubButton' onClick={() => window.open('https://www.github.com/alnaamaniahmed/personal-website', '_blank')}>
                        <GitHubIcon className='smth'/>
                        GitHub
                    </button>
                </div>
            </div>
            <div className='card'>
                <div className='cardFlexCont'>
                        <img src={quickCash}/>
                        <h2>Quick <span className='projectSpan'>Cash</span></h2>
                        <p className='cardPara'>Collaborated on developing QuickCash, an Android job search app, using Agile methods. Integrated Firebase for secure and real-time data handling.</p>
                </div>
            </div>
            <div className='card'>
                <div className='cardFlexCont'>
                        <img src={simonGame}/>
                        <h2>Simon <span className='projectSpan'>Game</span></h2>
                        <p className='cardPara'>A dynamic version of the Simon Game built with jQuery for interactive play and MVC architecture for clean code structure. Features a responsive design ensuring smooth gameplay on various devices.</p>
                </div>
            </div>
            <div className='card'>
                <div className='cardFlexCont'>
                        <img src={artByYou}/>
                        <h2>Art By <span className='projectSpan'>You</span></h2>
                        <p className='cardPara'>Developed a mobile-responsive website with Bootstrap, integrated dynamic content using PHP and MySQL, and managed databases with phpMyAdmin.</p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default ProjectsPage;