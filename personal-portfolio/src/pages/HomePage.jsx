import React, {useState, useEffect} from 'react';
import '../homePage.css';
import firstPic from '../firstPic.png';
import secondPic from '../secondPic.png';

function HomePage(props){
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
                Full Stack Web Developer
            </div>
        </div>
        <div className="ikbalImage">
                <img src={imageSrc} alt="Ikbal" />
        </div>
    </div>
        
    );
}
export default HomePage;