import React from "react";

// Desestruture as props corretamente
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