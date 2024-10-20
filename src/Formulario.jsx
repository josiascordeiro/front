import React from "react";


function Formulario (botao) {
 
            return (
                     <form action="">
<input type="text" name="" placeholder="Nome" id="" className="form-control"/>
<input type="text" name="" placeholder="Marca" id="" className="form-control"/>

{
            botao 
            ? 
            <input type="button" className="btn btn-primary" value="CAdastrar" id="" /> 
            :
            <div>
                   <input type="button" className="btn btn-warning" value="Alterar" id="" />
                   <input type="button" className="btn btn-danger" value="Excluir" id="" />
                   <input type="button" className="btn btn-secondary" value="Cancelar" id="" />
            </div>
}
                     </form>                        
            )

}
export default Formulario;