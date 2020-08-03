import React from 'react';

import Titulo from "./components/titulo";
import Integrantes from "./components/integrantes";
import Tabla from "./components/tabla";
import Consulta from "./components/consulta";
function App() {
  return (
    <div className="App">
      <Titulo />
      <Integrantes />
      <Tabla />
      <Consulta />
    </div>
  );
}

export default App;
