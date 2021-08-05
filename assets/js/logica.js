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
let currentAsnwer = -1;
let currentID = "";

//cueando comience el nivel, debe seleccionarse el nivel en que quedo y la puntuacion
//desde el local storage, y comenzar a correr el cronometro
const startLevel = () => {
    takeOffWhiteColor();
    resetTime();
    if (
        localStorage.getItem("level") &&
        localStorage.getItem("level") !== "" &&
        localStorage.getItem("points") &&
        localStorage.getItem("points") !== ""
    ) {
        loadLevel(localStorage.getItem("level"), localStorage.getItem("points"));
    } else {
        //iniciando nueva partida
        loadLevel("1", "0");
    }
};
const loadLevel = (level, points) => {
    localStorage.setItem("level", level);
    localStorage.setItem("points", points);

    //enviamos preguntas
    level = parseInt(level) - 1;
    console.log(level);
    console.log(preguntas[level]["opciones"][0]);
    $btnText.innerHTML = preguntas[level]["titulo"];
    $btnA1.innerHTML = preguntas[level]["opciones"][0];
    $btnA2.innerHTML = preguntas[level]["opciones"][1];
    $btnA3.innerHTML = preguntas[level]["opciones"][2];
    $btnA4.innerHTML = preguntas[level]["opciones"][3];
    asnwerRight = preguntas[level]["correcto"];
    console.log("nivel cargado, la respuesta correcta es " + asnwerRight);
};

const nextLevel = () => {
    let level = parseInt(localStorage.getItem("level"));
    let poinst = parseInt(localStorage.getItem("points"));

    //validar si no ha seleccionado una pregunta
    if (currentAsnwer !== -1) {
        console.log(
            "respuesta seleccionada " + currentAsnwer + " r. correcta " + asnwerRight
        );
        if (asnwerRight === currentAsnwer) {
            //sumamos puntos y cambiamos color del boton
            poinst = poinst*1.2+1*2;
            document.getElementById(currentID).style.background = "#18C41D";
            //deshabilitamos el boton de next mientras se realiza la transición
            document.getElementById("btnNext").disabled=true;

            resetTime();


            //cargamos siguiente nivel
            let t = 2;
            let g = setInterval(function () {
                console.log(t);
                if (t === 0) {
                    //vaciar la pregunta seleccionada
                    cleanAnswer();

                    //volvemos al color original del boton
                    document.getElementById(currentID).style.background = "#001980";
                    //reseteamos el ID del boton actualmente seleccionado
                    currentID = "";
                    //cargamos el siguiente nivel
                    level === preguntas.length
                        ? alert(`felicidades, ganaste y tu puntaje fue ${poinst}`)
                        : loadLevel(String(level + 1), poinst);
                    //activamos nuevamente el boton de transición de niveles
                        document.getElementById("btnNext").disabled=false;
                    //pintamos la puntuación en la tabla
                    paintWhitePoints(level);
                    //reseteamos el tiempo principal
                    resetTime();
                    //limpiamos el subtiempo de transición
                    clearInterval(g);
                }
                t--;
            }, 1000);
        } else {
            document.getElementById(currentID).style.background = "#E71A0D";
            document.getElementById("btnNext").disabled=true;
            let t = 2;
            let g = setInterval(function () {
                console.log(t);
                if (t === 0) {
                    document.getElementById(currentID).style.background = "#001980";
                    cleanStorage();
                    document.getElementById("btnNext").disabled=false;
                    startLevel();
                    clearInterval(g);
                }
                t--;
            }, 1000);
        }
    } else {
        alert("respuesta vacia");
    }
};

const paintWhitePoints = (lvl) =>{
    let currentLevelPoints = "puntuacion"+lvl;
    console.log(document.getElementById(currentLevelPoints));
    document.getElementById(currentLevelPoints).style.color = "#FFFFFF";
    document.getElementById(currentLevelPoints).innerHTML = " " + localStorage.getItem("points") + " millones";
}

const takeOffWhiteColor = () => {
    poinstTeemp = 0;
    let currentLevelPoints = "";
    for (let i = 1; i < preguntas.length + 1; i++) {
        currentLevelPoints = "puntuacion" + i;
        console.log(currentLevelPoints);
        document.getElementById(currentLevelPoints).style.color = "#9C9C9C";
        document.getElementById(currentLevelPoints).innerHTML = " ?? millones";
        //poinstTeemp = Math.round(poinstTeemp*1.2+1*2);
        //document.getElementById(currentLevelPoints).innerHTML = " " + poinstTeemp + " millones";
    }
}

const cleanStorage = () => {
    localStorage.clear();
    currentID = "";
    currentAsnwer = -1;
    asnwerRight = -1;
};
const cleanAnswer = () => {
    currentAsnwer = -1;
    asnwerRight = -1;
};

const getTextButton = (index) => {
    currentAsnwer = index;
    console.log(`La respuesta seleccionada actualmente es ${currentAsnwer}`);
};

const sendID = (idGotIt) => {
    if(currentID !== ""){
        document.getElementById(currentID).style.background = "#001980";
        //intento por arreglar el hover....
        document.getElementById(currentID).classList.remove("btnAswer");
        document.getElementById(currentID).classList.add("btnAswer");
    }
        
    currentID = idGotIt.id;
    (document.getElementById(idGotIt.id).style.background = "#C3C32C")
    getTextButton(parseInt(currentID.slice(-1)) - 1);
};

startLevel();
StartTime();

$btnA1.onclick = function () {
    sendID($btnA1);
};
$btnA2.onclick = function () {
    sendID($btnA2);
};
$btnA3.onclick = function () {
    sendID($btnA3);
};
$btnA4.onclick = function () {
    sendID($btnA4);
};
$btnNext.onclick = function () {
    nextLevel();
};
