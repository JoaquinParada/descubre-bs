let btnHam = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let bar1 = document.querySelector(".bar-1");
let bar2 = document.querySelector(".bar-2");
let bar3 = document.querySelector(".bar-3");

btnHam.addEventListener("click", slideNav);

function slideNav(){
  nav.classList.toggle("active");

  if(nav.classList.contains("active")){
    bar1.classList.add("bar-active-1");
    bar2.classList.add("bar-active-2");
    bar3.classList.add("bar-active-3");
  }
  else{
    bar1.classList.remove("bar-active-1");
    bar2.classList.remove("bar-active-2");
    bar3.classList.remove("bar-active-3");

  }

}


function validacion() 
{
    // VALIDACION NOMBRE
    valor = document.getElementById("nombre").value;
    if( valor == null || valor.length == 0) 
    {
      // alert("Ingrese Nombre!!");
        // document.getElementById('mensaje').innerHTML = "Complete el Nombre!";
        elemento = document.getElementById('nombre');
        elemento.focus();
        
        alert("Ingrese Nombre!!");
        return false;
        
    }

    // VALIDACION EMAIL
    valor = document.getElementById("email").value;
    
      
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
    {
        //document.getElementById('mensaje').innerHTML = "No es una direccion de email correcta" ;
        
        elemento = document.getElementById('email');
        elemento.value = '';
        elemento.focus();
        alert("Ingrese Email!!");
        return false;
    }
        
             
    alert("Gracias por compeltar sus datos!!");
    return true;          
}
