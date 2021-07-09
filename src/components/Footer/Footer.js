import React from 'react'
import Linkedin from '../../assets/Linkedin.svg'
import Behance from '../../assets/Behance.svg'
import Medium from '../../assets/Medium.svg'


import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Luana Eloy</p>
            <div class="lista-link">
                <a className="link" href="https://www.linkedin.com/in/luana-eloy" target="blank"><img class= "socialMedia" src={Linkedin} alt="icon linkedin" />
                </a>
                <a className="link" href="https://www.behance.net/luana-eloy" target="blank"><img class= "socialMedia" src={Behance} alt="icon behance" />
                </a>
                <a className="link" href="https://luanaeloy01.medium.com/" target="blank"><img class= "socialMedia" src={Medium} alt="icon medium" />
                </a>
            </div>



        </div>
    )
}


export default Footer