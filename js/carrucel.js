export default function slide(div, sliders, botons){
  const $sliders = document.querySelectorAll(sliders),
    $botones = document.querySelectorAll(botons),
    $div = document.querySelector(div);

  let contador = 1,
    tempo; 

  $sliders[0].classList.add('active-slider');
  $botones[0].classList.add('active-btn');
  
  const cargarDivs = (entries)=>{
    
    entries.forEach(entries => {

      if(entries.isIntersecting){
        tempo = setInterval(() => {
          if(contador > 0){
            $sliders[contador -1].classList.remove('active-slider');
            $botones[contador -1].classList.remove('active-btn');
          }
          if(contador >= $sliders.length){
            contador = 0;
          }

          $sliders[contador].classList.add('active-slider');
          $botones[contador].classList.add('active-btn');
          contador++;
        }, 5000);
  
      }else{
        clearInterval(tempo);
      }

    });
  }

  const observador = new IntersectionObserver(cargarDivs, {
    threshold: 0.5,
  });


  observador.observe($div);

  document.addEventListener('click', (e)=>{
    if(Number(e.target.id)){
      $sliders.forEach(ele => ele.classList.remove('active-slider'))
      $botones.forEach(ele => ele.classList.remove('active-btn'))

      $sliders[e.target.id -1].classList.add('active-slider');
      $botones[e.target.id -1].classList.add('active-btn');
      contador = Number(e.target.id) -1;
    }
  })
}