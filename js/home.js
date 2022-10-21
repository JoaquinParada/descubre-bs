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

