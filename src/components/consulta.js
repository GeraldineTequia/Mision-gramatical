import React from "react";


function Consulta(props) {
  return   <div className="col-sm-6"><section className="container">  <br/>  <br/> <br/> <br/> <br/> 
  <br/> <br/> <br/> <br/> <br/> <br/> <br/>  <br/> <br/><div className="card text-white bg-info mb-3" > 
  
  <div class="card-header"> <strong>¿Qué es Babel?</strong> </div>
  <div class="card-body">
    <p class="card-text">Babel es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de Node.js entienda.
Babel funciona mediante plugins para que le indiquemos que cosas queremos que transforme, por ejemplo con el plugin babel-plugin-transform-es2015-arrow-functions podemos decirle que transforme las arrow functions
de ECMAScript 2015 a funciones normales, con babel-plugin-transform-react-jsx podemos hacer que entienda código de JSX y lo convierta a código JS normal.</p>
  </div>
</div>
<div className="card text-white bg-info mb-3" > 
  <div class="card-header"><strong>¿Qué es WebPack?</strong> </div>
  <div class="card-body">
    <p class="card-text">Webpack es un Module Bundler for modern JavaScript applications, es decir, un empaquetador de módulos para aplicaciones modernas hechas en JavaScript.
Una aplicación web lleva múltiples tipos de assets como imágenes, fuentes personalizadas, JSON, CSS, JavaScript, etc. y manejar esto se vuelve un dolor de cabeza a medida que nuestra aplicación tiene éxito y va creciendo.
Todo esto lo resuelve Webpack y es por eso que será nuestro empaquetador de módulos (o Module Mundler).</p>
  </div>
</div> 
<div className="card text-white bg-info mb-3" > 
  <div class="card-header"> <strong>¿para que se usa en REACT? </strong></div>
  <div class="card-body">
    <p class="card-text">Podemos utilizar otras tecnologías para programar con React, pero en este caso vamos a utilizar Babel y Webpack. Babel nos permitirá utilizar Javascript de siguiente generación sin necesidad de esperar 
    a que los motores de los exploradores decidan implementarlos. Mientras que Webpack nos permitirá empaquetar las dependencias y generar archivos estáticos con el código necesario.</p>
  </div>
</div> </section> </div>;

}


export default Consulta;


