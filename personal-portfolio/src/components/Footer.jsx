import React from 'react';
import '../footer.css';
import {ReactComponent as LinkedInIcon} from '../icons/linkedin.svg';
import {ReactComponent as GitHubIcon} from '../icons/github.svg';

function Footer(props){
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p>Designed & Developed by <span>Ahmed Al-Naamani</span></p>
                <p id='copyRight'>Copyright <span>&copy;</span> {year}</p>
                <div className='socials'>
                    <a href='https://www.github.com/alnaamaniahmed' target="_blank" rel="noopener noreferrer"><GitHubIcon className='icon'/></a>
                    <a href='https://www.linkedin.com/in/ahmedalnaamani' target="_blank" rel="noopener noreferrer"><LinkedInIcon className='icon'/></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;