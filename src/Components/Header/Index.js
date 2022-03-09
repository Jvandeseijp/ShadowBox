import React from 'react'
import './Index.css'
import Logo from '../../Assets/Logo.png'
import MobileHeader from '../MobileHeader/Index'
import Moralis from 'moralis/types'

function Header () {

    const{
        account,
        authenticate,
        isAuthenticated,
        user,
        Moralis,         
    }= useMoralis();

    return(
    <div className='headerparent'>
        <div className="mobileheader">
            <img className='mobileheaderlogo' src={Logo} />
            <MobileHeader />
        </div>
        <div className='headercon'>
            <div className='headersec1'>
                <img src={Logo} />
            </div>
            <div className='headersec2'>
                <p>UNIONS</p>
                <p>DEFI</p>
                <p>CLASS</p>
                <p>MARKET</p>
                <p>PLATFORM</p>
                <p>SPAR</p>
                <p>COMMISION</p>
            </div>
            <button onClick={authenticate({"sign message" : "welcome to ShadowBox", "chainId" : 1})}> Connect with Metamask</button>
        </div>
        </div>
    );
}
export default Header