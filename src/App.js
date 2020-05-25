import React from "react";
import Divisas from "./components/Divisas";
import BsPesos from "./components/BsPesos";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Convertidor de Pesos Chilenos a Bs</h1>
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Divisas />
            </div>
            <div className="one-half column">
              <BsPesos />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
