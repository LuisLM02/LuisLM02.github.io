export default function getStorage(){
  if(localStorage.getItem('notas') === null){
    localStorage.setItem('notas','{"id": 0,"notas":[]}')
  }
}