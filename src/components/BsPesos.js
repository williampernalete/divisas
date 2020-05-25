import React, { Fragment, useState } from "react";
import Error from "./Error";

const BsPesos = () => {
  const [tasaCambio, guardarTasaCambio] = useState({
    valortasa: 0,
    totalcambiar: 0,
    resultado: 0,
  });

  const [error, setError] = useState(false);

  const actualizarTasa = (e) => {
    console.log("pase");
    guardarTasaCambio({
      ...tasaCambio,
      valortasa: parseInt(e.target.value),
    });
  };

  const actualizarTotal = (e) => {
    guardarTasaCambio({
      ...tasaCambio,
      totalcambiar: parseInt(e.target.value),
    });
  };

  const calcular = (e) => {
    e.preventDefault();

    const { valortasa, totalcambiar } = tasaCambio;

    //validamos
    if (valortasa < 0 || totalcambiar < 0) {
      setError(true);
      return;
    }
    guardarTasaCambio({
      ...tasaCambio,
      resultado: totalcambiar / valortasa,
    });
  };

  return (
    <Fragment>
      <h3>Cuanto Pesos Necesitas Vender</h3>
      <form onSubmit={calcular}>
        <div className="campo">
          {error ? <Error /> : null}
          <label>Valor Tasa de Cambio</label>

          <input
            type="number"
            className="u-full-width"
            onChange={actualizarTasa}
            value={tasaCambio.valortasa}
          />
        </div>
        <div className="campo">
          <label>Total de Bolivares que deseas Cambiar</label>
          <input
            type="number"
            className="u-full-width"
            onChange={actualizarTotal}
            value={tasaCambio.totalcambiar}
          />
        </div>
        <div className="campo">
          <label>Total en Pesos Chileno</label>
          <input
            type="text"
            className="u-full-width"
            value={tasaCambio.resultado}
          />
        </div>

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Calcular los pesos"
        />
      </form>
    </Fragment>
  );
};

export default BsPesos;
