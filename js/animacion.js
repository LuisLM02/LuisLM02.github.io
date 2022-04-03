export function animacionDivs(divs){
  const $divs = document.querySelectorAll(divs);

  const cargarDivs = (entries)=>{
    
    entries.forEach(entries => {

      if(entries.isIntersecting){
        entries.target.style.opacity = 1;
      }else{
        entries.target.style.opacity = 0;
      }

    });
  }

  const observador = new IntersectionObserver(cargarDivs, {
    threshold: 0.5,
  });

  $divs.forEach((ele)=>{
    observador.observe(ele)
  })
}