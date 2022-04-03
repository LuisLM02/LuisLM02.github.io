export default function imprimirNotas(template, display){
  const $template = document.querySelector(template).content,
    $display = document.querySelector(display),
    $fragment = document.createDocumentFragment();

  let notas = JSON.parse(localStorage.getItem('notas'))

  if(notas.notas.length === 0) return

  notas.notas.forEach(element => {
    $template.querySelector('.titulo').textContent = element._titulo;
    $template.querySelector('.contenido').innerHTML = element._nota;

    $template.querySelector('.edit').dataset.id = element._id;
    $template.querySelector('.delete').dataset.id = element._id;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone)

  });

  $display.querySelector('#sin-notas').remove()
  $display.appendChild($fragment)
}