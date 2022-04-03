export default function darkmode(btn, atributo){
  const $themeBtn = document.getElementById(btn),
    $elementos = document.querySelectorAll(atributo);

  let moon = '<ion-icon name="moon-outline"></ion-icon>',
   sun = '<ion-icon name="sunny-outline"></ion-icon>';

  function darkmode(){
    $elementos.forEach(ele =>{
      ele.classList.remove('lightmode')
    })
    $themeBtn.innerHTML = moon
    localStorage.setItem('theme','dark')
    document.body.style.backgroundColor = 'black'
    $themeBtn.style.color = 'black'
  }

  function lightmode(){
    $elementos.forEach(ele =>{
      ele.classList.add('lightmode')
    })
    $themeBtn.innerHTML = sun
    localStorage.setItem('theme','light')
    document.body.style.backgroundColor = 'white'
    $themeBtn.style.color = 'white'
  }

  $themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem('theme') === 'light'){
      darkmode()
    }
    else{
      lightmode()
    }
  }, true)

  document.addEventListener('DOMContentLoaded', (e)=>{
    if(localStorage.getItem('theme') === null)
      localStorage.setItem('theme', 'dark');
    
    if(localStorage.getItem('theme') === 'light')
      lightmode()

    if(localStorage.getItem('theme') === 'dark')
      darkmode()
  })
}