import React from 'react'
import './Index.css'
import poweredimg from '../../Assets/poweredimg.png'
import Moralis from 'moralis/types';
import { useMoralis } from 'react-moralis';


function HeroSec () {

    const{
        account,
        isAuthenticated,
        user,
        Moralis,         
    }= useMoralis()

    return(
        <div className="herosecparent">
        <div className="heroseccon">
            <div className="herosecheading">
                <h1>WELCOME TO THE NEW AMERICA</h1>
            </div>
            <div className='herosecbtn'>
                <button>SHADOWBOX</button>
                <a href="https://www.uniswap.com, _blank"><button >TRADE ON UNIWSWAP </button> </a>
                <a href="/terms"><p>TERMS APPLY</p></a>
            </div>
        </div>
        <div className='poweredimg'>
            <img src={poweredimg} />
        </div>
        </div>
    );
}
export default HeroSec