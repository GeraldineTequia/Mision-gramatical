import React from "react";


function Tabla(props) {
  return  <div className="row row-cols-1 row-cols-md-2"
  className="col-sm-6">
 <section className="container" > <table scope="col-6" class="table table-striped table-dark table-responsive" style = {{ position: "absolute", left: "50%", top: "50%", border: "1"}}>
  <thead>
    <tr>
      <th>Nombres</th>
      <th>Apellidos</th>
      <th>Correo</th>
      <th>Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Maria Camila </td>
      <td>Hernandez Montenegro</td>
      <td>c.hernandez@josegalan.edu.co</td>
      <td>3145612587</td>
    </tr>
    <tr>
      <td>Laura </td>
      <td>Gonzalez Posada</td>
      <td>l.gonzalez@josegalan.edu.co</td>
      <td>3008425155</td>
    </tr>
    <tr>
      <td>Alisson </td>
      <td>Vasquez Montoya</td>
      <td>avasquezm@josegalan.edu.co</td>
      <td>3217953545</td>
    </tr>
    <tr>
      <td>Maria Geraldine </td>
      <td>Tequia Rivera</td>
      <td>m.tequia@josegalan.edu.co</td>
      <td>3165093245</td>
    </tr>
  </tbody>

</table></section> </div> ;

}

export default Tabla;
