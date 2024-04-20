import React, {useState, useEffect} from 'react';
import thirdPic from '../thirdPic.png';
import Slider from 'react-infinite-logo-slider';
import '../aboutPage.css';
import dumbbellIcon from '../icons/dumbbell.png';
import iceSkates from '../icons/iceSkates.png';
import htmlImage from '../icons/html.png';
import androidStudio from '../icons/android_studio.png';
import cProgramming from '../icons/cProgramming.png';
import cLion from '../icons/clion.png';
import cssImage from '../icons/css.png';
import expressImage from '../icons/express.png';
import figmaPic from '../icons/figma.png';
import firebasePic from '../icons/firebase.png';
import gitPic from '../icons/git.png';
import intelliJPic from '../icons/intellij_idea.png';
import javaPic from '../icons/java.png';
import javaScriptPic from '../icons/javascript.png';
import nodejsPic from '../icons/nodejs.png';
import postgresPic from '../icons/postgresql.png';
import pyCharmPic from '../icons/pycharm.png';
import postmanPic from '../icons/postman.png';
import pythonPic from '../icons/python.png';
import reactjsPic from '../icons/reactjs_icon.png';
import vsCodePic from '../icons/vscode.png';
import wireSharkPic from '../icons/wireshark.png';
import secondPic from '../secondPic.png';

function AboutPage(){
    const [imageSrc, setImageSrc] = useState(thirdPic);
    useEffect(() => {
        function handleResize(){
            if(window.innerWidth <= 768){
                setImageSrc(secondPic);
            }
            else {
                setImageSrc(thirdPic);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
            <div className='gridAbout'>
                <div className='ikbalImage3'>
                    <img src={imageSrc} alt='Ikbal' />
                </div>
                <div className='words'>
                    <h1 className='headText'>Know Who I am</h1>
                    <p id='firstText'>I am from the culturally rich and scenic city of Muscat, Oman. As a Junior Computer Science student at Dalhousie University. I am passionately coding my path through the complexities of technology.</p>
                    <p id='secondText'>In addition to my academic pursuits, I engage in various activities to maintain a balanced lifestyle!</p>
                    <ul className='activities'>
                        <li className='activity-1'>Lifting <span className='dumbbell'><img src={dumbbellIcon} alt='dumbbell'/></span></li>
                        <li className='activity-2'>Ice skating <span className='ice'> <img src={iceSkates} alt='iceSkates' className='ice'/></span></li>
                    </ul>
                </div>
            </div>
            <div className='skillSetsContainer'>
                <div className='professional-skillSet'>
                    <Slider
                        width="250px"
                        duration={30}
                        pauseOnHover={true}
                        blurBorders={false}
                    >

                        <Slider.Slide className='sliderStyle'><img src={javaPic} alt='Java' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={pythonPic} alt='Python' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={htmlImage} alt='HTML' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={cssImage} alt='CSS' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={javaScriptPic} alt='JavaScript' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={cProgramming} alt='C Programming' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={reactjsPic} alt='React' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={nodejsPic} alt='Node.js' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={expressImage} alt='Express' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={postgresPic} alt='PostgreSQL' /></Slider.Slide>
                    </Slider>
                </div>
                <div className='professional-skillSet'>
                <Slider
                        width="250px"
                        duration={30}
                        pauseOnHover={true}
                        blurBorders={false}
                    >
                        <Slider.Slide className='sliderStyle'><img src={intelliJPic} alt='intellij' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={cLion} alt='cLion' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={pyCharmPic} alt='pycharm' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={androidStudio} alt='androidStudio' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={figmaPic} alt='figma' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={firebasePic} alt='firebase' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={gitPic} alt='gitPic' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={postmanPic} alt='postman' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={vsCodePic} alt='vscode' /></Slider.Slide>
                        <Slider.Slide className='sliderStyle'><img src={wireSharkPic} alt='wireshark' /></Slider.Slide>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default AboutPage;