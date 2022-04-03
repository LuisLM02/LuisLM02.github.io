import { animacionDivs } from "./animacion.js";
import slide from "./carrucel.js";
import imprimirProyectos from "./imprimirProyectos.js";
import imprimirSkills from "./imprimirSkills.js"
import responsiveMenu from "./responsiveMenu.js";

document.addEventListener('DOMContentLoaded', (e)=>{
  imprimirSkills('.skills', '.tarjeta');
  imprimirProyectos('.slider', '.proyectos-template');
  animacionDivs('.animation');
  slide('#proyectos', '.slider-slides', '.botons-sliders button');
  responsiveMenu('.menu-btn', '.menu');
})