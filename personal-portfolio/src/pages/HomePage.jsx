import React from 'react';
import '../homePage.css';
import newpic from '../newpic.png';


function HomePage(props){
    return (
    <div className='biggerGrid'>
        <div className='welcomeGrid'>
            <div className='text-1'>
                Hey There!
            </div>
            <div className='text-2'>
                I'M <span id="name">Ahmed Al-Naamani</span>
            </div>
            <div className='text-3'>
                Full Stack Web Developer
            </div>
        </div>
        <div className="ikbalImage">
                <img src={newpic} alt="Ikbal" />
            </div>
    </div>
        
    );
}
export default HomePage;