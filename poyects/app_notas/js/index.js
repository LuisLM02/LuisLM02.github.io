import deleteNote from "./delete_note.js";
import editNote from "./editar_nota.js";
import getStorage from "./get_storage.js";
import guardarNota from "./guardar_nota.js";
import imprimirNotas from "./imprimir_notas.js";
import mostrarForm from "./mostrar_form.js";

document.addEventListener("DOMContentLoaded", (e) => {
  mostrarForm("btn-new-note", ".form-note button", ".form-note");
  getStorage();
  guardarNota(".form-note form");
  imprimirNotas("#note-template", ".notas");
  deleteNote();
  editNote();
});
