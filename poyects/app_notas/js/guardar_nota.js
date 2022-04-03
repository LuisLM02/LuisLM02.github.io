export default function guardarNota(form){
  const $form = document.querySelector(form);

  $form.addEventListener('submit',(e)=>{
    let notas = JSON.parse(localStorage.getItem('notas')),
      nota = new Nota ($form.tituloNota.value,$form.contenido.value.replace(/\n/g,"<br/>"))

    ++notas.id;
    notas.notas.push(nota)
    localStorage.setItem('notas', JSON.stringify(notas))
  })
}