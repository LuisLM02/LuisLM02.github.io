class Nota{
  constructor(titulo, nota){
    this._titulo = titulo;
    this._nota = nota;
    this._id = JSON.parse(localStorage.getItem('notas')).id;
  }
}
