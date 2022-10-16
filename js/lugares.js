let lugaresContainer = document.querySelector(".lugares-container");
let filtroCard = document.querySelectorAll(".filtro-card");
let titulo = document.querySelector(".section-titulo");

buscarLugares("Museos");

filtroCard.forEach(el => {
  let filtroNombre = el.querySelector(".filtro-nombre").textContent;
  el.addEventListener("click", ()=> buscarLugares(filtroNombre))
  
});

function buscarLugares(filtroNombre){
  titulo.innerHTML = filtroNombre;

  fetch("../lugares.json")
  .then((response) => response.json())
  .then((data) => cargarLugares(data[filtroNombre]));

}


function cargarLugares(data) {
  let lugares = "";
  for (let el of data) {
    let lugaresHTML = `
    <article class="lugar-card">
      <h2 class="lugar-titulo">${el.nombre}</h2>
      <p>
        ${el.descripcion}
      </p>
      <div class="frames-lugar-container">
        <iframe
          class="iframe-lugar"
          src=${el.mapa}
          width="350"
          height="250"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>        
        <div class="img-container">
          <img
            class="imagen-lugar"
            src=${el.imagen}
            alt=${el.nombre}
          />
          <div class="pantalla-oscura">
          <button class="btn-conocer-mas" ><a class="anchor-lugares" href=${el.sitio} target="_blank">Conocer mas</a></button>
          </div>        
        </div>
      </div>
      <hr />
    </article>`;
    lugares += lugaresHTML;
  }
  lugaresContainer.innerHTML = lugares;
}
