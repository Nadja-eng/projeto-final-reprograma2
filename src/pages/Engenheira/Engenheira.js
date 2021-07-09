import dados from '../../Service/dados'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'

import './style.css'

function Engenheiras() {
    return(
        <>
        <Menu />
          <div className="container_card">
                {dados.map(engenheira =>{
                    return(
                       <div>
                        <img className="card_img" src={engenheira.imagem} alt={engenheira.nome} />
                        <p className='name'>{engenheira.nome}</p>
                        <p className='description'>{engenheira.descricao}</p>
                        </div>
                     )
            })}
          </div>
          <Footer/>
        </>
    )
}

export default Engenheiras