tiempo = document.getElementById("tiempo");
n=60;
x = setInterval(function(){
    tiempo.innerHTML=n;
    if(n==0){ alert("Se te acabo el tiempo"); clearInterval(x); }
    n--;
},1000);