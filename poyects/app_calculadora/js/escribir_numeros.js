export default function escribirNumeros(botones, display){
  const $botones = document.querySelectorAll(botones),
    $display = document.getElementById(display);

  $botones.forEach(boton =>{
    boton.addEventListener('click', (e)=>{
      let validar = true

      if(e.target.textContent === ')' && !$display.innerHTML) return;

      if(
        e.target.textContent === '.' && !$display.innerHTML ||
        e.target.textContent === '.' && $display.textContent.charAt($display.textContent.length -1) === '+' ||
        e.target.textContent === '.' && $display.textContent.charAt($display.textContent.length -1) === '-' ||
        e.target.textContent === '.' && $display.textContent.charAt($display.textContent.length -1) === '*' ||
        e.target.textContent === '.' && $display.textContent.charAt($display.textContent.length -1) === '/'
        ){
        $display.innerHTML += '0.';
        return;
      }
      if(e.target.textContent === '.'){
        let operacion = Array.from($display.textContent);
        operacion.reverse();

        for (let i = 0; i < operacion.length; i++) {
          const element = operacion[i];
            if(
              element === '/'||
              element === '*'||
              element === '+'||
              element === '-'
            ){
              operacion = operacion.slice(0, i);
            };
        }

        operacion.forEach(num =>{
          if(num === '.') {
            validar = false;
          };
        })
      }

      if(e.target.textContent === '(' && $display.textContent.charAt($display.textContent.length -1) === ')'){
        $display.innerHTML += '*(';
        return;
      }
      if(e.target.textContent === '(' && Number($display.textContent.charAt($display.textContent.length -1))){
        $display.innerHTML += '*(';
        return;
      }

      if(validar === false) return;

      $display.innerHTML += e.target.textContent;
    })
  })
}