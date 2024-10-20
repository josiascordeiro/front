# Projeto React com Spring Boot e Vite

Este projeto é uma aplicação React que se comunica com um backend Spring Boot. O projeto foi configurado usando Vite para um desenvolvimento rápido e eficiente.

## Estrutura do Projeto

- `src/App.jsx`: Componente principal da aplicação.
- `src/Formulario.jsx`: Componente de formulário para entrada de dados.
- `src/Tabela.jsx`: Componente de tabela para exibição de dados.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- Backend Spring Boot em execução na URL `http://localhost:8080`

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/josiascordeiro/front.git


## Execução
    npm run dev

## Estrutura do Código

   app.jsx
   import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  // Estado para controlar o botão de cadastro
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  
  // Estado para armazenar a lista de produtos
  const [produtos, setProdutos] = useState([]);
  
  // Estado para armazenar os dados do formulário
  const [objProduto, setObjProduto] = useState({ nome: '', marca: '' });

  // useEffect para fazer a requisição ao backend quando o componente é montado
  useEffect(() => {
    // Faz uma requisição GET ao endpoint do backend
    fetch("http://localhost:8080/listar")
      // O primeiro .then é usado para processar a resposta da requisição
      .then(retorno => retorno.json())
      // O segundo .then é usado para lidar com os dados convertidos em JSON
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  // Função para obter dados do formulário ao digitar
  const aoDigitar = (e) => {
    // Atualiza o estado objProduto com os novos valores digitados
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  // Função para cadastrar o produto
  const cadastrar = () => {
    // Lógica para cadastrar o produto (a ser implementada)
    console.log("Produto cadastrado:", objProduto);
  };

  return (
    <>  
      <h1>Teste</h1>
      <p>{JSON.stringify(objProduto)}</p>
      {/* Renderiza o componente Formulario e passa as props necessárias */}
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} obj={objProduto} cadastrar={cadastrar} />
      {/* Renderiza o componente Tabela e passa a lista de produtos como prop */}
      <Tabela vetor={produtos}/>             
    </>
  );
}

export default App;



## Formulario.jsx
    GitHub Copilot
Claro! Aqui está um arquivo file:///c%3A/Projeto_React_Spring_Vite/front/README.md atualizado que inclui os trechos de código comentados e os passos para inserir e atualizar o repositório no GitHub.

file:///c%3A/Projeto_React_Spring_Vite/front/README.md
Navegue até o diretório do projeto:

Instale as dependências:

Execução
Para iniciar o servidor de desenvolvimento, execute:

A aplicação estará disponível em http://localhost:3000.

Estrutura de Código
App.jsx
Este é o componente principal da aplicação. Ele gerencia o estado dos produtos e do formulário.

Formulario.jsx
Este componente renderiza um formulário para entrada de dado

import React from "react";

// Componente de formulário para entrada de dados
function Formulario({ botao, eventoTeclado, obj, cadastrar }) {
  return (
    <form>
      {/* Campo de entrada para o nome do produto */}
      <input
        type="text"
        value={obj.nome || ''}
        onChange={eventoTeclado}
        name="nome"
        placeholder="Nome"
        className="form-control"
      />
      {/* Campo de entrada para a marca do produto */}
      <input
        type="text"
        value={obj.marca || ''}
        onChange={eventoTeclado}
        name="marca"
        placeholder="Marca"
        className="form-control"
      />
      {/* Botão de cadastro ou botões de alterar/excluir/cancelar */}
      {
        botao 
        ? 
        <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" /> 
        :
        <div>
          <input type="button" value="Alterar" className="btn btn-warning" />
          <input type="button" value="Excluir" className="btn btn-danger" />
          <input type="button" value="Cancelar" className="btn btn-secondary" />
        </div>
      }
    </form>
  );
}

export default Formulario;



## Tabela.jsx

        import React from 'react';

// Componente de tabela para exibição de dados
function Tabela({ vetor }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Marca</th>
          <th>Selecione</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapeia a lista de produtos e renderiza uma linha para cada produto */}
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice + 1}</td>
            <td>{obj.nome}</td>
            <td>{obj.marca}</td>
            <td><button type="button" className="btn btn-success">Selecionar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;



## Enviando o Projeto para o GitHub


Claro! Aqui está um arquivo file:///c%3A/Projeto_React_Spring_Vite/front/README.md atualizado que inclui os trechos de código comentados e os passos para inserir e atualizar o repositório no GitHub.

### file:///c%3A/Projeto_React_Spring_Vite/front/README.md

```markdown
# Projeto React com Spring Boot e Vite

Este projeto é uma aplicação React que se comunica com um backend Spring Boot. O projeto foi configurado usando Vite para um desenvolvimento rápido e eficiente.

## Estrutura do Projeto

- `src/App.jsx`: Componente principal da aplicação.
- `src/Formulario.jsx`: Componente de formulário para entrada de dados.
- `src/Tabela.jsx`: Componente de tabela para exibição de dados.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- Backend Spring Boot em execução na URL `http://localhost:8080`

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/josiascordeiro/front.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd front
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

## Execução

Para iniciar o servidor de desenvolvimento, execute:

```sh
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura de Código

### `App.jsx`

Este é o componente principal da aplicação. Ele gerencia o estado dos produtos e do formulário.

```jsx
import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  // Estado para controlar o botão de cadastro
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  
  // Estado para armazenar a lista de produtos
  const [produtos, setProdutos] = useState([]);
  
  // Estado para armazenar os dados do formulário
  const [objProduto, setObjProduto] = useState({ nome: '', marca: '' });

  // useEffect para fazer a requisição ao backend quando o componente é montado
  useEffect(() => {
    // Faz uma requisição GET ao endpoint do backend
    fetch("http://localhost:8080/listar")
      // O primeiro .then é usado para processar a resposta da requisição
      .then(retorno => retorno.json())
      // O segundo .then é usado para lidar com os dados convertidos em JSON
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  // Função para obter dados do formulário ao digitar
  const aoDigitar = (e) => {
    // Atualiza o estado objProduto com os novos valores digitados
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  // Função para cadastrar o produto
  const cadastrar = () => {
    // Lógica para cadastrar o produto (a ser implementada)
    console.log("Produto cadastrado:", objProduto);
  };

  return (
    <>  
      <h1>Teste</h1>
      <p>{JSON.stringify(objProduto)}</p>
      {/* Renderiza o componente Formulario e passa as props necessárias */}
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} obj={objProduto} cadastrar={cadastrar} />
      {/* Renderiza o componente Tabela e passa a lista de produtos como prop */}
      <Tabela vetor={produtos}/>             
    </>
  );
}

export default App;
```

### `Formulario.jsx`

Este componente renderiza um formulário para entrada de dados.

```jsx
import React from "react";

// Componente de formulário para entrada de dados
function Formulario({ botao, eventoTeclado, obj, cadastrar }) {
  return (
    <form>
      {/* Campo de entrada para o nome do produto */}
      <input
        type="text"
        value={obj.nome || ''}
        onChange={eventoTeclado}
        name="nome"
        placeholder="Nome"
        className="form-control"
      />
      {/* Campo de entrada para a marca do produto */}
      <input
        type="text"
        value={obj.marca || ''}
        onChange={eventoTeclado}
        name="marca"
        placeholder="Marca"
        className="form-control"
      />
      {/* Botão de cadastro ou botões de alterar/excluir/cancelar */}
      {
        botao 
        ? 
        <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" /> 
        :
        <div>
          <input type="button" value="Alterar" className="btn btn-warning" />
          <input type="button" value="Excluir" className="btn btn-danger" />
          <input type="button" value="Cancelar" className="btn btn-secondary" />
        </div>
      }
    </form>
  );
}

export default Formulario;
```

### `Tabela.jsx`

Este componente renderiza uma tabela para exibição de dados.

```jsx
import React from 'react';

// Componente de tabela para exibição de dados
function Tabela({ vetor }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Marca</th>
          <th>Selecione</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapeia a lista de produtos e renderiza uma linha para cada produto */}
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice + 1}</td>
            <td>{obj.nome}</td>
            <td>{obj.marca}</td>
            <td><button type="button" className="btn btn-success">Selecionar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
```

## Enviando o Projeto para o GitHub

### Inicializando o Repositório Git

1. Abra o terminal na raiz do seu projeto.
2. Inicialize o repositório Git (se ainda não fez isso):

   ```sh
   git init
   ```

3. Adicione todos os arquivos ao repositório:

   ```sh
   git add .
   ```

4. Faça o commit dos arquivos adicionados:

   ```sh
   git commit -m "Initial commit"
   ```

5. Adicione o repositório remoto:

   ```sh
   git remote add origin https://github.com/josiascordeiro/front.git
   ```

6. Envie os arquivos para o GitHub:

   ```sh
   git push -u origin master
   ```

### Atualizando o Repositório no GitHub

1. Verifique o status do repositório:

   ```sh
   git status
   ```

2. Adicione os arquivos modificados ao repositório:

   ```sh
   git add .
   ```

3. Faça o commit das modificações:

   ```sh
   git commit -m "Atualizações no App.jsx e correções no formulário"
   ```

4. Envie as modificações para o GitHub:

   ```sh
   git push origin master
   ```

### Adicionando o README.md ao Repositório

1. Crie o arquivo README.md na raiz do seu projeto e copie o conteúdo deste documento para ele.
2. Adicione o arquivo README.md ao repositório:

   ```sh
   git add README.md
   ```

3. Faça o commit do arquivo README.md:

   ```sh
   git commit -m "Adiciona README.md ao projeto"
   ```

4. Envie o commit para o GitHub:

   ```sh
   git push origin master
   ```

## Contribuição

Se você quiser contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

### Adicionando o file:///c%3A/Projeto_React_Spring_Vite/front/README.md ao Repositório:

1. **Crie o Arquivo README.md:**
   - Crie um arquivo chamado file:///c%3A/Projeto_React_Spring_Vite/front/README.md na raiz do seu projeto e copie o conteúdo acima para ele.

2. **Adicione o Arquivo ao Repositório:**
   - Adicione o arquivo file:///c%3A/Projeto_React_Spring_Vite/front/README.md ao repositório:
     ```sh
     git add README.md
     ```

3. **Faça o Commit do Arquivo:**
   - Faça o commit do arquivo README.md:
     ```sh
     git commit -m "Adiciona README.md ao projeto"
     ```

4. **Envie o Commit para o GitHub:**
   - Envie o commit para o repositório remoto:
     ```sh
     git push origin master
     ```

### Comandos Completos:

Aqui estão todos os comandos juntos para facilitar a execução:

```sh
git add README.md
git commit -m "Adiciona README.md ao projeto"
git push origin master
```

Com isso, seu arquivo file:///c%3A/Projeto_React_Spring_Vite/front/README.md será adicionado ao repositório no GitHub, fornecendo uma documentação clara e útil para o seu projeto.