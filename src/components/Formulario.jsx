import { useState } from "react";
import BotonForm from "./BotonForm";

function Formulario({ estadoNombre, estadoPass, labelName, labelPass }) {

  // stateInputs
  const [nombre, setNombre] = useState(estadoNombre);
  const [pass, setPass] = useState(estadoPass);

  // codigo show boton 
  const showBotonCode = 252525;

  // functions
  function validarPass(event) {
    event.preventDefault();
    setPass(event.target.value);
  }

  function validarNombre(event) {

    event.preventDefault();   
    setNombre(event.target.value);
  }

  // return html
  return (
    <>
      <div className="col">
        <label>{labelName}</label>
        <input className="form-control" type="text" onChange={validarNombre} />
      </div>
      <div className="col">
        <label>{labelPass}</label>
        <input className="form-control" type="number" onChange={validarPass} />
      </div>

      <div>{pass == showBotonCode ? <BotonForm/> : null}</div>
    </>
  );
}

export default Formulario;
