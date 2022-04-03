export function activarBtn(btn){
  btn.classList.remove('none')
  btn.disabled = false
}

export function desactivarBtn(btn){
  btn.classList.add('none')
  btn.disabled = true
}