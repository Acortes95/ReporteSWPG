let modo = "";

function mostrarSW(){

modo="SW";

document.getElementById("formulario").innerHTML=`

<form id="formSW">

<div class="campo">
<label>Selección de planta</label>
<select id="planta">
<option value="">--</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
</div>

<div class="campo">
<label>Estado de la planta</label>
<select id="estadoPlanta">
<option>Bien</option>
<option>Cargada</option>
<option>Muy cargada</option>
</select>
</div>

<div class="campo">
<label>Excepciones</label>
<select id="excepciones" onchange="controlUboat()">
<option>Limpio</option>
<option>Alguna excepción en estaciones</option>
<option>Alguna excepción en uboat</option>
<option>1 uboat de excepciones</option>
<option>2 uboats de excepciones</option>
</select>
</div>

<div id="extraUboat"></div>

<div class="campo">
<label>Estado de sigma</label>
<select id="sigma">
<option>Bien</option>
<option>algún uboat casi lleno</option>
<option>1 uboat lleno</option>
<option>1+ uboats llenos</option>
</select>
</div>

</form>
`;
}

function controlUboat(){

let valor=document.getElementById("excepciones").value;

if(valor.includes("uboat")){

document.getElementById("extraUboat").innerHTML=`

<div class="campo">
<label>Ubicación del uboat de excepciones a recoger</label>
<select id="ubicacionUboat">
<option>R.Alta</option>
<option>R.Baja</option>
<option>Norte.A</option>
<option>Norte.B</option>
<option>Sur.A</option>
<option>Sur.B</option>
</select>
</div>

`;

}else{

document.getElementById("extraUboat").innerHTML="";

}

}

function mostrarPG(){

modo="PG";

document.getElementById("formulario").innerHTML=`

<form id="formPG">

<div class="campo">
<label>Estado de las jaulas de Decant (cantidad de cajas)</label>
<select id="decant">
<option>0</option>
<option>0-5</option>
<option>5-10</option>
<option>10-15</option>
<option>15-20</option>
<option>20-25</option>
</select>
</div>

<div class="campo">
<label>Estado de las jaulas de Recive (cantidad de cajas)</label>
<select id="recive">
<option>0</option>
<option>0-5</option>
<option>5-10</option>
<option>10-15</option>
<option>15-20</option>
<option>20-25</option>
</select>
</div>

<div class="campo">
<label>Estado de corral (pallets en problem)</label>
<select id="corral" onchange="controlCorral()">
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
</select>
</div>

<div id="extraCorral"></div>

</form>
`;
}

function controlCorral(){

let valor=document.getElementById("corral").value;

if(valor>0){

document.getElementById("extraCorral").innerHTML=`

<div class="campo">
<label>Ubicación</label>
<input id="ubicacionCorral" type="text" placeholder="Escribir ubicación">
</div>

<div class="campo">
<label>Tipo de problema</label>
<input id="tipoProblema" type="text" placeholder="Opcional">
</div>

`;

}else{

document.getElementById("extraCorral").innerHTML="";

}

}

function crearReporte(){

let reporte="";

if(modo=="SW"){

let planta=document.getElementById("planta").value;
let estado=document.getElementById("estadoPlanta").value;
let excepciones=document.getElementById("excepciones").value;
let sigma=document.getElementById("sigma").value;

reporte+=`SW REPORTE P${planta}\n\n`;

reporte+=`Estado planta: ${estado}\n`;
reporte+=`Excepciones: ${excepciones}\n`;

let uboat=document.getElementById("ubicacionUboat");

if(uboat){
reporte+=`Ubicación uboat excepciones: ${uboat.value}\n`;
}

reporte+=`Estado sigma: ${sigma}\n`;

}

if(modo=="PG"){

let decant=document.getElementById("decant").value;
let recive=document.getElementById("recive").value;
let corral=document.getElementById("corral").value;

reporte+=`PG REPORTE\n\n`;

reporte+=`Jaulas Decant: ${decant}\n`;
reporte+=`Jaulas Recive: ${recive}\n`;
reporte+=`Corral: ${corral}\n`;

if(corral>0){

let ubicacion=document.getElementById("ubicacionCorral").value;
let problema=document.getElementById("tipoProblema").value;

reporte+=`Ubicación: ${ubicacion}\n`;

if(problema!=""){
reporte+=`Problema: ${problema}\n`;
}

}

}

document.getElementById("reporteFinal").value=reporte;

}