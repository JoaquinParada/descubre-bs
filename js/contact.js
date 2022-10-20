let btnHam = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let bar1 = document.querySelector(".bar-1");
let bar2 = document.querySelector(".bar-2");
let bar3 = document.querySelector(".bar-3");

btnHam.addEventListener("click", slideNav);

function slideNav() {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    bar1.classList.add("bar-active-1");
    bar2.classList.add("bar-active-2");
    bar3.classList.add("bar-active-3");
  }
  else {
    bar1.classList.remove("bar-active-1");
    bar2.classList.remove("bar-active-2");
    bar3.classList.remove("bar-active-3");

  }

}

//Funcion Formulario
let inputNombre = document.querySelector("#nombre");
let inputMail = document.querySelector("#email");
let submitCard = document.querySelector(".submit-card");

let form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  if (validacion()) {
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      this.reset()
      mostrarModalSubmit();
    }
    inputNombre.value = "";
    inputMail.value = "";
  }
  else {
    return;
  }
}


function validacion() {
  // VALIDACION NOMBRE
  let valorNombre = inputNombre.value;
  if (valorNombre == null || valorNombre.length == 0) {
    let elemento = document.getElementById('nombre');
    elemento.focus();
    alert("Ingrese Nombre!!");
    return false;
  }

  // VALIDACION EMAIL
  let valorMail = inputMail.value;

  if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valorMail))) {
    //document.getElementById('mensaje').innerHTML = "No es una direccion de email correcta" ;        
    let elementoMail = document.getElementById('email');
    elementoMail.value = '';
    elementoMail.focus();
    alert("Ingrese Email!!");
    return false;
  }

  return true;
}


function mostrarModalSubmit() {
  submitCard.style.display = "flex";

  setTimeout(() => {
    submitCard.style.display = "none";
  }, 2000);

}