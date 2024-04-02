import React from 'react';
import thirdPic from '../thirdPic.png';
import '../aboutPage.css';
import dumbbellIcon from '../icons/dumbbell.png';
import iceSkates from '../icons/iceSkates.png';


function AboutPage(props){
    return (
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
    );
}
export default AboutPage;