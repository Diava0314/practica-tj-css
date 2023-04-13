const app = document.getElementById("app")!;

app.innerHTML =`
<br>
<button id="btn-1" >hola</button>
<br>
<br>
<p id="saludo">Como estas?</p>
<br>
<br>
<button id="pregunta"></button>

`
const btn1 = document.getElementById("btn-1")!;
const saludo = document.getElementById("saludo")!;
const pregunta= document.getElementById("pregunta")!;

btn1.style.color = "red";

saludo.style.color = "black";
saludo.style.background = "red";
saludo.style.width = "100px";
pregunta.style.width ="200px"
pregunta.style.height= "120px"; 
pregunta.style.background="green";
pregunta.style.border = "solid orange 5px"; 
pregunta.style.color = "pink";
pregunta.style.fontSize ="20px";


