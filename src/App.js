
import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <div className="row mt-5">
        <Formulario
          labelName={"Nombre:"}
          labelPass={"Password:"}
          estadoNombre={""}
          estadoPass={""}
        />
      </div>
    </>
  );
}

export default App;
