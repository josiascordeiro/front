import React, { useState, useEffect } from 'react';
import Formulario from './formulario';
import Tabela from './Tabela';
import './App.css'; // Certifique-se de importar o arquivo CSS

function App() {
  const produto = {
    nome: '',
    marca: ''
  };

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]); // Inicialize o estado com um vetor vazio para manipular podutos
  const [objProduto, setObjProduto] = useState(produto);// Inicialize o estado com um objeto vazio para manipular um produto

  useEffect(() => {
    fetch("http://localhost:8080/listar")// Faça uma requisição GET para o servidor
      .then(resposta => resposta.json())// Converta a resposta em JSON
      .then(resposta_convertida => setProdutos(resposta_convertida))// Atualize o estado com a resposta convertida
      .catch(error => console.error('Erro ao buscar produtos:', error));// Trate erros
  }, []);

  const aoDigitar = (e) => { // Crie uma função para manipular o evento de digitação
    console.log('Evento aoDigitar chamado');// Exiba uma mensagem no console
    console.log(e.target.value);// Exiba o valor do campo no console
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });// Atualize o estado com o valor do campo
  };

  const cadastrar = () => {// Crie uma função para cadastrar um produto
    console.log("Produto cadastrado:", objProduto);// Exiba o produto no console
    fetch("http://localhost:8080/cadastrar", {// Faça uma requisição POST para o servidor
      method: "POST",
      headers: {// Defina o cabeçalho da requisição
        "Content-Type": "application/json",// Defina o tipo de conteúdo
      },
      body: JSON.stringify(objProduto)// Converta o objeto em JSON
    })
    .then(resposta => resposta.json())// Converta a resposta em JSON
    .then(dados => {  // Exiba a resposta no console
      console.log("Produto cadastrado com sucesso:", dados);
      // Atualize a lista de produtos após o cadastro
      setProdutos([...produtos, dados]);
      // Limpe o formulário
      setObjProduto(produto);// Atualize o estado com um objeto vazio
    })
    .catch(error => console.error('Erro ao cadastrar produto:', error));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
      <h1>Teste</h1>
      <p>{JSON.stringify(objProduto)}</p>// Exiba o objeto no console
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} obj={objProduto} cadastrar={cadastrar} />
      <Tabela vetor={produtos}/>             
    </div>
  );
}

export default App;