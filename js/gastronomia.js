let seccionesGastronomia = document.querySelector(".secciones");

fetch("../gastronomia.json")
  .then((res) => res.json())
  .then((data) => traerGastronomia(data));

function traerGastronomia(data) {
  let gastronomia = "";
  for (let el of data) {
    let gastronomiaHTML = `
        <article class="gastronomia-article">
          <h2 class="gastronomia-titulo">${el.comida}</h2>
          <p class="texto-gastronomia">${el.descripcion}</p>
          <div class="gastronomia-info-container">
            <ul class="ul-gastronomia">
              <li><b class="gastronomia-local-titulo"><a href=${el.lugares[0][2]} target="_blank">${el.lugares[0][0]}</a></b>
                <ul>
                  <li class="local-direccion">${el.lugares[0][1]}</li>
                </ul>
              </li>
              <li><b class="gastronomia-local-titulo"><a href=${el.lugares[1][2]} target="_blank">${el.lugares[1][0]}</a></b>
                <ul>
                  <li class="local-direccion">${el.lugares[1][1]}</li>
                </ul>
              </li>
              <li><b class="gastronomia-local-titulo"><a href=${el.lugares[2][2]} target="_blank">${el.lugares[2][0]}</a></b>
                <ul>
                  <li class="local-direccion">${el.lugares[2][1]}</li>
                </ul>
              </li>
              <li><b class="gastronomia-local-titulo"><a href=${el.lugares[3][2]} target="_blank">${el.lugares[3][0]}</a></b>
                <ul>
                  <li class="local-direccion">${el.lugares[3][1]}</li>
                </ul>
              </li>
              <li><b class="gastronomia-local-titulo"><a href=${el.lugares[4][2]} target="_blank">${el.lugares[4][0]}</a></b>
                <ul>
                  <li class="local-direccion">${el.lugares[4][1]}</li>
                </ul>
              </li>
            </ul>
            <img class="img-gastronomia" src=${el.imagen} />
          </div>        
        </article>
        <hr />
      `;
    gastronomia += gastronomiaHTML;
  }
  seccionesGastronomia.innerHTML = gastronomia;
}
