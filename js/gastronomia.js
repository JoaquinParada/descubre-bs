let seccionesGastronomia = document.querySelector(".secciones");

fetch("../gastronomia.json")
  .then((res) => res.json())
  .then((data) => traerGastronomia(data));

function traerGastronomia(data) {
  let gastronomia = "";
  for (let el of data) {
    console.log(el.lugares[1][1]);
    let gastronomiaHTML = `
        <article class="gastronomia-article">
          <h2>${el.comida}</h2>
          <p class="texto-gastronomia">${el.descripcion}</p>
          <div class="gastronomia-info-container">
            <ul class="ul-gastronomia">
              <li><b>${el.lugares[0][0]}</b>
                <ul>
                  <li>${el.lugares[0][1]}</li>
                </ul>
              </li>
              <li><b>${el.lugares[1][0]}</b>
                <ul>
                  <li>${el.lugares[1][1]}</li>
                </ul>
              </li>
              <li><b>${el.lugares[2][0]}</b>
                <ul>
                  <li>${el.lugares[2][1]}</li>
                </ul>
              </li>
              <li><b>${el.lugares[3][0]}</b>
                <ul>
                  <li>${el.lugares[3][1]}</li>
                </ul>
              </li>
              <li><b>${el.lugares[4][0]}</b>
                <ul>
                  <li>${el.lugares[4][1]}</li>
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
