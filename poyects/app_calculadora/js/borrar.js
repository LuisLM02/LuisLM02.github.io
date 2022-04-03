export function borrar(operacion, btn){
  const $operacion = document.getElementById(operacion),
    $btn = document.querySelector(btn);
  
  $btn.addEventListener('click', (e)=>{
    $operacion.innerHTML = $operacion.innerHTML.slice(0,-1);
  })
}

export function borrarTodo(operacion, resultado, btn){
  const $operacion = document.getElementById(operacion),
    $resultado = document.getElementById(resultado),
    $btn = document.querySelector(btn);

  $btn.addEventListener('click', (e)=>{
    $operacion.innerHTML = '';
    $resultado.innerHTML = '';
  })
}