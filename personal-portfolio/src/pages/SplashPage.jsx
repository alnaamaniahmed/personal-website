import React from 'react';
import '../splash.css';
import {ReactComponent as Splash} from '../icons/infinitySplash.svg';

function SplashPage(){
    return (<div className='loading'>
        <Splash />
    </div>);
}

export default SplashPage;