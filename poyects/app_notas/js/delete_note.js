export default function deleteNote(){
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.delete')){
      let notas = JSON.parse(localStorage.getItem('notas')),
        id = Number(e.target.dataset.id),
        contador = 0;

      for(let i = 0; notas.notas.length > i; i++){
        if(notas.notas[i]._id === id){
          contador = i
        }
      }

      let confirmacion = confirm(`esta seguro de eleminar "${notas.notas[contador]._titulo}"`)
      if(confirmacion === false) return
      notas.notas.splice(contador, 1)
      localStorage.setItem('notas', JSON.stringify(notas))
      location.reload();
    }
  })
}