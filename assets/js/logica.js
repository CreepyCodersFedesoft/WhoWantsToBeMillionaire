//Variables
let $btnPoints = document.getElementById("btnPoints");
let $btnText = document.getElementById("btnText");
let $btnNext = document.getElementById("btnNext");
let $btnA1 = document.getElementById("btnA1");
let $btnA2 = document.getElementById("btnA2");
let $btnA3 = document.getElementById("btnA3");
let $btnA4 = document.getElementById("btnA4");
let currentLevel = 0;
let asnwerRight = -1;

//cueando comience el nivel, debe seleccionarse el nivel en que quedo y la puntuacion
//desde el local storage, y comenzar a correr el cronometro
const startLevel = () => {
    if(localStorage.getItem('level') && localStorage.getItem('level') !== "" && localStorage.getItem('points') && localStorage.getItem('points') !== ""){
        loadLevel(localStorage.getItem("level"), localStorage.getItem("points"));
    } else {
        //iniciando nueva partida
        loadLevel("1", "0");
    }
}
const loadLevel = (level, points) =>{
    localStorage.setItem('level', level);
    localStorage.setItem('points', points);
    
    //enviamos preguntas
    level = parseInt(level) - 1;
    console.log(level);
    console.log(preguntas[level]["opciones"][0]);
    $btnA1.innerHTML = preguntas[level]["opciones"][0];
    $btnA2.innerHTML = preguntas[level]["opciones"][1];
    $btnA3.innerHTML = preguntas[level]["opciones"][2];
    $btnA4.innerHTML = preguntas[level]["opciones"][3];
    asnwerRight = preguntas[level]["correcto"];
};

const nextLevel = () => {
    let level = parseInt(localStorage.getItem("level"));
    let poinst = localStorage.getItem("points");
    //validar si la pregunta esta bien

    //cargamos siguiente nivel
    console.log(String(level+1));
    console.log((level+1).toString());
    //level === preguntas.length ? alert(`felicidades, ganeste y tu puntaje fue ${poinst}`) : loadLevel((level+1), poinst);



};

const cleanStorage = () => {
    localStorage.clear();
};

startLevel();


$btnA1.onclick = function () {
    
};
$btnA2.onclick = function () {
    
};
$btnA3.onclick = function () {
    
};
$btnA4.onclick = function () {
    
};
$btnNext.onclick = function () {
    nextLevel();
};
