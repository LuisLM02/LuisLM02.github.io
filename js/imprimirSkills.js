import {skills} from "./data/skills.js";

export default function imprimirSkills(display, template){
  const $display = document.querySelector(display),
    $template = document.querySelector(template).content,
    $fragment = document.createDocumentFragment();
  
  skills.forEach(element => {
    $template.querySelector('img').setAttribute('src', element.src);
    $template.querySelector('img').setAttribute('alt', element.text);
    $template.querySelector('figcaption').textContent = element.text;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  })

  $display.appendChild($fragment);
}