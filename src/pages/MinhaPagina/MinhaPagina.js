import React, {useState, useEffect}from 'react'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import img from '../../assets/Luana.jpg'
import Axios from 'axios'

import './style.css'

//https://api.github.com/users/Nadja-eng/repos


const MinhaPagina = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filtroRepos, setFiltroRepos] = useState([])

    

    useEffect(()=> {
        const dadosList = async () =>{
            const resposta = await Axios.get('https://api.github.com/users/Nadja-eng/repos')
            const dados = await resposta.data
        
            setRepos(dados)
        } 
        dadosList()
        console.log(repos)
    },[])
    

    useEffect(()=>{
        setFiltroRepos(
            repos.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    },[busca, repos])
   return(
       <>
         <Menu/>
         <div className="busca">
         <input className="busca__repo" onChange={e => {setBusca(e.target.value)}} placeholder="Digite um Repo"/> 
         <div className="container"> 
             <img	class="fotoPessoal" src={img} width="40%" atl="foto luana"/>  
             <h3 className="nome__luana">Luana Eloy</h3>
             <h4 className="descricao-front">Front-end Developer | HTML, CSS, JavaScript, React</h4>
         </div>
         {filtroRepos.map(repo =>(
            
             <p className="list">{repo.name} </p>
             
         ))}
         </div>
         <Footer/>
       </>
   )
}
 
   export default MinhaPagina
