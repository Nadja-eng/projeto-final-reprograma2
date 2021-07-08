import dados from '../../Service/dados'

function Engenheiras() {
    return(
        <div className="main">
            {dados.map(engenheira =>{
                return(
                    <div>
                        <img src={engenheira.imagem} alt={engenheira.nome} />
                        <p className='name'>{engenheira.nome}</p>
                        <p className='description'>{engenheira.descricao}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Engenheiras