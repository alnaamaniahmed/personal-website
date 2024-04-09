import React, {useRef} from 'react';
import thirdPic from '../thirdPic.png';
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

function AboutPage(props){
    return (
        <div>
            <div className='gridAbout'>
                <div className='ikbalImage3'>
                    <img src={thirdPic} alt='Ikbal' />
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
                    <ul className='listOfSkills'>
                        <li><img src={javaPic} height='80px' width='80px' alt='javaImage'/></li>
                        <li><img src={pythonPic} height='80px' width='80px' alt='pythonImage'/></li>
                        <li><img src={htmlImage} height='80px' width='80px' alt='htmlImage'/></li>
                        <li><img src={cssImage} height='80px' width='80px' alt='cssImage'/></li>
                        <li><img src={javaScriptPic} height='80px' width='80px' alt='jsImage'/></li>
                        <li><img src={cProgramming} height='80px' width='80px' alt='cProgrammingImage'/></li>
                        <li><img src={reactjsPic} height='80px' width='80px' alt='reactImage'/></li>
                        <li><img src={nodejsPic} height='80px' width='80px' alt='nodejsImage'/></li>
                        <li><img src={expressImage} height='80px' width='80px' alt='expressImage'/></li>
                        <li><img src={postgresPic} height='80px' width='80px' alt='postgresqlImage'/></li>
                        <li><img src={javaPic} height='80px' width='80px' alt='javaImage'/></li>
                        <li><img src={pythonPic} height='80px' width='80px' alt='pythonImage'/></li>
                        <li><img src={htmlImage} height='80px' width='80px' alt='htmlImage'/></li>
                        <li><img src={cssImage} height='80px' width='80px' alt='cssImage'/></li>
                        <li><img src={javaScriptPic} height='80px' width='80px' alt='jsImage'/></li>
                        <li><img src={cProgramming} height='80px' width='80px' alt='cProgrammingImage'/></li>
                        <li><img src={reactjsPic} height='80px' width='80px' alt='reactImage'/></li>
                        <li><img src={nodejsPic} height='80px' width='80px' alt='nodejsImage'/></li>
                        <li><img src={expressImage} height='80px' width='80px' alt='expressImage'/></li>
                        <li><img src={postgresPic} height='80px' width='80px' alt='postgresqlImage'/></li>
                    </ul>
                </div>
                <div className='professional-skillSet'>
                    <ul className='listOfSkills'>
                        <li><img src={intelliJPic} height='80px' width='80px' alt='intelliJImage'/></li>
                        <li><img src={pyCharmPic} height='80px' width='80px' alt='pyCharmImage'/></li>
                        <li><img src={cLion} height='80px' width='80px' alt='cLionImage'/></li>
                        <li><img src={vsCodePic} height='80px' width='80px' alt='vsCodePicPic'/></li>
                        <li><img src={postmanPic} height='80px' width='80px' alt='postmanPic'/></li>
                        <li><img src={gitPic} height='80px' width='80px' alt='gitPic'/></li>
                        <li><img src={firebasePic} height='80px' width='80px' alt='firebasePic'/></li>
                        <li><img src={figmaPic} height='80px' width='80px' alt='figmaPicImage'/></li>
                        <li><img src={wireSharkPic} height='80px' width='80px' alt='wireSharkPic'/></li>
                        <li><img src={androidStudio} height='80px' width='80px' alt='androidStudio'/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default AboutPage;