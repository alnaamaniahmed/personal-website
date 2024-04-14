import React from 'react';
import '../resumePage.css';
import {ReactComponent as DownloadIcon} from '../icons/download.svg';
import resumePic from '../icons/resume.png';


function ResumePage(props){
    const handleDownloadClick = () => {
        window.open('/resources/resume.pdf', '_blank');
    };
    return(
        <div className='resumeFlexContainer'>
            <button className='downloadButton'onClick={handleDownloadClick}>
                <DownloadIcon className='downloadIcon'/>
                <p className='textDownload'>Download</p>
            </button>
            <img className='resumeImg' src={resumePic} alt='resumeImage'/>
            <button className='downloadButton' id='secondDownloadButton' onClick={handleDownloadClick}>
                <DownloadIcon className='downloadIcon'/>
                <p className='textDownload'>Download</p>
            </button>
        </div>
    );
}
export default ResumePage;