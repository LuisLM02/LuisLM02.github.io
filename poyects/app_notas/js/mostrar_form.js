export default function mostrarForm(btnOpen, btnClose, display){
  const $btnOpen = document.getElementById(btnOpen),
  $btnClose = document.querySelector(btnClose),
  $display = document.querySelector(display);

  $btnOpen.addEventListener('click', (e)=>{
    $display.classList.remove('none')
  })

  $btnClose.addEventListener('click', (e)=>{
    $display.classList.add('none')
  })
}