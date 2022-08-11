import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  // stateInputs
  const [nombre, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(true);

  return (
    <>
      <div className="row mt-5">
        <Formulario
          labelName={"Nombre:"}
          labelPass={"Password:"}
          name={nombre}
          setName={setName}
          pass={pass}
          setPass={setPass}
          error={error}
          setError={setError}
        />
      </div>
    </>
  );
}

export default App;
