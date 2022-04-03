export default function resultado(operacion, resultado, btn){
  const $operacion = document.getElementById(operacion),
    $resultado = document.getElementById(resultado),
    $btn = document.querySelector(btn);

  $btn.addEventListener('click', ()=>{
    if(!$operacion.innerHTML) return;

    let result = 0;

    try {
      result = eval($operacion.textContent);
    } catch (error) {
      $resultado.innerHTML = 'Error';
      return;
    } finally{
      if (result === NaN)
        result = 'Error'
    }

    $resultado.innerHTML = result;
  })
}