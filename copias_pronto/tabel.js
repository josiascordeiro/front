import React from "react";

function Tabela ({vetor}) { 
            return (
                        <>
                        <table className="table">
                                    <thead>
                                                <tr>
                                                       <th>#</th>    
                                                       <th>Nome</th>
                                                       <th>Marca</th>
                                                       <th>Selecione</th>
                                                </tr>
                                    </thead>
                                    <tbody>     {
                                           vetor.map((obj, indice) => (
                                          <tr key={indice}>
                                                 <td>{indice + 1}</td>
                                                 <td>{obj.nome}</td>
                                                 <td>{obj.marca}</td>
                                                 <td><button type="button" className="btn btn-success">Selecionar</button></td>
                                          </tr>
                    ))
                }
                                    </tbody>
                        </table></>
            )
}
export default Tabela;