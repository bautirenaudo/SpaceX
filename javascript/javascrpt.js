(function(){
     //VARIABLES
    var nombreInput=document.getElementById("nombreInput");
    var numeroInput=document.getElementById("numeroInput");
    var button=document.getElementById("button"); 
    var table=document.getElementById("table");
     //FUNNCIONES

    var agregar=function(){
        
        if(nombreInput.value=="" && numeroInput.value==""){
            nombreInput.style.cssText="outline: 2px solid red;";
            numeroInput.style.cssText="outline: 2px solid red;";
        }else if(nombreInput.value=="" && numeroInput.value!=""){
            nombreInput.style.cssText="outline: 2px solid red;";
            numeroInput.style.cssText="outline: none;"; 
        }else if(nombreInput.value!="" && numeroInput.value==""){
            nombreInput.style.cssText="ouline:none;";
            numeroInput.style.cssText="outline:2px solid red;";
        }else{
        nombreInput.style.cssText="outline:none;";
        numeroInput.style.cssText="outline:none;";

        var nombre=nombreInput.value;
        var numero=numeroInput.value;

        var span=document.createElement("span");
        span.setAttribute("class","icon-trash");
        var tdSpan=document.createElement("td");
        tdSpan.setAttribute("class","divSpan");
        var td2=document.createElement("td");
        td2.setAttribute("class","numero");
        td2.textContent=numero;
        var td=document.createElement("td");
        td.setAttribute("class","nombre");
        td.textContent=nombre;
        var tr=document.createElement("tr");

        tdSpan.appendChild(span);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(tdSpan);
        table.appendChild(tr);

        

        nombreInput.value="";
        numeroInput.value="";

        

        
        }
       var allSpan=document.getElementsByClassName("divSpan");
       for(let i=0; i<allSpan.length; i++){
            allSpan[i].onclick= function(){
                allSpan[i].parentNode.remove();
                for(let j=i; agregar(); j++){
                    allSpan[j].onclick= function(){
                        allSpan[j].parentNode.remove();    
                    }
                }  
            }
        } 

    }
    var sacarBorder= function(){
        nombreInput.style.cssText="outline:none;";
        numeroInput.style.cssText="outline:none;";
    }   
     
     //EVENTOS
     //agregar cliente
    button.addEventListener("click",agregar);   
    //sacar outline
    nombreInput.addEventListener("click",sacarBorder);
    numeroInput.addEventListener("click",sacarBorder);
    //borrar cliente
    
    
    
    
}());