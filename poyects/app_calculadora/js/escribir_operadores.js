export default function escribirOperadores(botones, display){
  const $botones = document.querySelectorAll(botones),
    $display = document.getElementById(display);

    $botones.forEach(boton =>{

      boton.addEventListener('click', (e)=>{
        if(e.target.textContent === '+' && !$display.textContent) return;
        if(e.target.textContent === '*' && !$display.textContent) return;
        if(e.target.textContent === '/' && !$display.textContent) return;

        if($display.textContent.charAt($display.textContent.length -1) === '/' && e.target.textContent !== '-') return; 
        if($display.textContent.charAt($display.textContent.length -1) === '*' && e.target.textContent !== '-') return;
        if($display.textContent.charAt($display.textContent.length -1) === '+' && e.target.textContent !== '-') return;
        if($display.textContent.charAt($display.textContent.length -1) === '(' && e.target.textContent !== '-') return;
        if($display.textContent.charAt($display.textContent.length -1) === '-') return;

        $display.innerHTML += e.target.textContent;
      })
    })
}