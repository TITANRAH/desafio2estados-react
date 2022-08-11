import BotonForm from "./BotonForm";

function Formulario({
  name,
  setName,
  pass,
  setPass,
  labelName,
  labelPass,
  setError,
  error,
}) {
  
  // funcion para mostrar o ocultar pass
  function mostrarPass() {
    let inputPass = document.getElementById("boton-password");

    inputPass.type === "password"
      ? (inputPass.type = "text")
      : (inputPass.type = "password");
  }

  // condicion para mostrar o no boton
  if (pass == 252525) {
    setError(false);
  } else if (pass < 252525 || pass > 252525) {
    setError(true);
  }

  return (
    <>
      <div className="col">
        <label>{labelName}</label>
        <input
          className="form-control"
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="col">
        <label>{labelPass}</label>
        <input
          id="boton-password"
          className="form-control"
          type="password"
          onChange={(event) => setPass(event.target.value)}
          value={pass}
        />
        <span onClick={mostrarPass} className="bi bi-eye password-icon"></span>
      </div>

      <div>{!error ? <BotonForm /> : null}</div>
    </>
  );
}

export default Formulario;
