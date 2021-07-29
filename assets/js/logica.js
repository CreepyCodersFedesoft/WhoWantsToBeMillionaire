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
        //ya tiene una partida empezada
    } else {
        //iniciando nueva partida
        localStorage.setItem('level', '1');
        localStorage.setItem('points', '0');
        
        //enviamos preguntas
        console.log(preguntas[0]["opciones"][0]);
        $btnA1.innerHTML = preguntas[0]["opciones"][0];
        $btnA2.innerHTML = preguntas[0]["opciones"][1];
        $btnA3.innerHTML = preguntas[0]["opciones"][2];
        $btnA4.innerHTML = preguntas[0]["opciones"][3];
        asnwerRight = preguntas[0]["correcto"];

    }
}
const loadLevel = () =>{

    
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
    
};
