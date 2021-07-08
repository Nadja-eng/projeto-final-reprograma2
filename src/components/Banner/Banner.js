import React from 'react'
import img from '../../assets/imagem.svg'
import './style.css'

const Banner = () => {
 return(
    
    <div className="main">
       <div>
          <h1>Mulheres que mudaram a Engenharia</h1>
       </div>
         <img src={img} alt="ilustração com logo react"/>
     </div>  
 )
}

export default Banner