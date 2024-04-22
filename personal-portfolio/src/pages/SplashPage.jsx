import React from 'react';
import '../styles/splash.css';
import {ReactComponent as Splash} from '../icons/infinitySplash.svg';

function SplashPage(){
    return (<div className='loading'>
        <Splash className='splashSvg'/>
    </div>);
}

export default SplashPage;