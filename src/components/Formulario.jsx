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
          className="form-control"
          type="number"
          onChange={(event) => setPass(event.target.value)}
          value={pass}
        />
      </div>

      <div>{!error ? <BotonForm /> : null}</div>
    </>
  );
}

export default Formulario;
