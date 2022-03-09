import React from 'react'
import './Index.css'
import poweredimg from '../../Assets/poweredimg.png'


function HeroSec () {
    return(
        <div className="herosecparent">
        <div className="heroseccon">
            <div className="herosecheading">
                <h1>WELCOME TO THE NEW AMERICA</h1>
            </div>
            <div className='herosecbtn'>
                <button>SHADOWBOX</button>
                <button>TRADE ON UNIWSWAP  </button>
                <p>TERMS APPLY</p>
            </div>
        </div>
        <div className='poweredimg'>
            <img src={poweredimg} />
        </div>
        </div>
    );
}
export default HeroSec