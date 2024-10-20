import React, { useEffect, useState } from 'react'
import './App.css'
import Tabela from './Tabela'
import Formulario from './formulario'

function App() {
        //Objeto produto
        const produto = {
          codigo: '0',
          nome: '',
          marca: ''
        }
        const [btnCadastrar, setBtnCadastrar] = useState(true)
        // Estado para armazenar a lista de produtos
        const [produtos,setProdutos] = useState([])
        //useState para fazer a ligação entre o formulário e back-end
        const [objProduto, setObjProduto] = useState(produto)
        // 
        // useEffect para fazer a requisição ao backend quando o componente é montado
        useEffect(()=>{
          // Faz uma requisição GET ao endpoint do backend
          fetch("http://localhost:8080/listar")
           // O primeiro .then é usado para processar a resposta da requisição
          .then(retorno => retorno.json())          
          // O segundo .then é usado para lidar com os dados convertidos em JSON
          .then(retorno_convertido => setProdutos(retorno_convertido));
        },[]);

        //obtendo dados do formulário ao digitar
        const aoDigitar = (e) => {
          setObjProduto({...objProduto, [e.target.name]:e.target.value});   
             
        }

  return (
    <>  
      <p><h1>Teste</h1>
     
      {JSON.stringify(objProduto)}</p>
      <Formulario eventoTeclado={aoDigitar} obj={objProduto}/>
      <Tabela vetor={produtos}/>             
    </>
  )
}

export default App