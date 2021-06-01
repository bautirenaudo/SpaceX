(function(){
  //VARIABLES
  var start=document.getElementById("start");
  var sun=document.getElementById("sun");

  //FUNNCIONES
  var bigSun= function(){
    
    sun.style.cssText="transition: all 15s;box-shadow: 0 0 500px 1500px rgb(241, 241, 146);";
    start.style.cssText="animation: boton 2s linear ;transform: translateX(-130%);";
    
  }

  //EVENTOS
  start.addEventListener("click", bigSun);
 
 
}());