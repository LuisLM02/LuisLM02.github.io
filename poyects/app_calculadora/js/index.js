import { borrar, borrarTodo } from "./borrar.js";
import escribirNumeros from "./escribir_numeros.js";
import escribirOperadores from "./escribir_operadores.js";
import resultado from "./resultado.js";

document.addEventListener('DOMContentLoaded', (e)=>{
  escribirNumeros('.numero', 'operacion');
  escribirOperadores('.operador', 'operacion');
  resultado('operacion', 'resultado', '.igual');
  borrar('operacion', '.borrar');
  borrarTodo('operacion', 'resultado', '.clear');
})