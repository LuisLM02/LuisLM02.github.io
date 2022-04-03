import { proyectos } from "./data/proyects.js";

export default function imprimirProyectos(display, template){
  const $display = document.querySelector(display),
    $template = document.querySelector(template).content,
    $fragment = document.createDocumentFragment();

  proyectos.forEach(ele => {
    $template.querySelector('.slider-slides').dataset.id = ele.id;
    $template.querySelector('.img-slider').setAttribute('src', ele.img);
    $template.querySelector('.img-slider').setAttribute('alt', ele.titulo);
    $template.querySelector('.title-slider').textContent = ele.titulo;7
    $template.querySelector('.text-slider').textContent = ele.descripcion;
    $template.querySelector('.link').setAttribute('href', ele.link);
    $template.querySelector('.link-github').setAttribute('href', ele.linkGit);

    let $clone = document.importNode($template, true),
      $btn = document.createElement('button');
    
    $btn.id = ele.id;

    document.querySelector('.botons-sliders').appendChild($btn)
    $fragment.appendChild($clone);

  });

  $display.appendChild($fragment);
}