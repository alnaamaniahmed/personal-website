import React, {useState, useEffect} from 'react';
import '../homePage.css';
import firstPic from '../firstPic.png';
import secondPic from '../secondPic.png';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function HomePage(props){
    const [text] = useTypewriter({
        words: ['Full Stack Web Developer', 'Software Engineer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    const [imageSrc, setImageSrc] = useState(firstPic);
    useEffect(() => {
        function handleResize(){
            if(window.innerWidth <= 570){
                setImageSrc(secondPic);
            }
            else {
                setImageSrc(firstPic);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
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
                {text}<span id='cursor'><Cursor /></span>
            </div>
        </div>
        <div className="ikbalImage">
                <img src={imageSrc} alt="Ikbal" />
        </div>
    </div>
        
    );
}
export default HomePage;