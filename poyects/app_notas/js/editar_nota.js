export default function editNote(){
  const $editNote = document.querySelector('.form-edit-note'),
    $form = document.querySelector('.form-edit-note form'),
    $btnCloseEdit = document.querySelector('.form-edit-note button'),
    notas = JSON.parse(localStorage.getItem('notas'));

  let contador = 0;

  $btnCloseEdit.addEventListener('click', (e)=>{
    $editNote.classList.toggle('none');
  })

  document.addEventListener('click', (e)=>{
    if(e.target.matches('.edit')){
      let id = Number(e.target.dataset.id);
        
      for(let i = 0; notas.notas.length > i; i++){
        if(notas.notas[i]._id === id){
          contador = i
        }
      }

      $editNote.classList.toggle('none')
      $form.tituloNota.value= notas.notas[contador]._titulo;
      $form.contenido.value = notas.notas[contador]._nota;
    }
  })

  $form.addEventListener('submit', (e)=>{
    notas.notas[contador]._titulo = $form.tituloNota.value
    notas.notas[contador]._nota = $form.contenido.value

    localStorage.setItem('notas', JSON.stringify(notas))
  })
}