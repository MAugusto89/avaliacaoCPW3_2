import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom'
import style from './style.module.css'
import { useState } from "react";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const [userURL, setUserURL] = useState()
  return (
    <>
      <div className={style.topo}>
        <p>Exemplo Auth</p>
        <h1>Seja bem vindo!</h1>
        <img src="" alt="" className='FotoPerfil' />
        <span>NomeFulano</span>
        <p className={style.sair}><Link to='/logout'>Sair</Link></p>
      </div>
      <div className='container'>
        <h2>Exemplo de Autenticação com React</h2>
      </div>
    </>
  )
}

export default Home