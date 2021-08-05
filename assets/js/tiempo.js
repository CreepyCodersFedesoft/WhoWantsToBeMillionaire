let tiempo = document.getElementById("tiempo");
let defaultTime = 60;
let timeToLose = defaultTime;
let StartTime = () => {
    x = setInterval(function(){
        tiempo.innerHTML=timeToLose;
        if(timeToLose==0){ 
            alert("¡Has perdido!, el tiempo se ha agotado..."); 
            cleanStorage();
            document.getElementById("btnNext").disabled=false;
            startLevel();
            resetTime();
            StartTime();
            clearInterval(x); 
        }
        timeToLose--;
    },1000);
}



const resetTime = () => {
    timeToLose = defaultTime;
};