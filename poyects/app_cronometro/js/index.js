import { activarBtn, desactivarBtn } from "./activar_desactivar_btn.js";
import darkmode from "./darkmode.js";

const $btnPlay = document.getElementById("btn-play"),
  $btnContinue = document.getElementById("btn-continue"),
  $btnStop = document.getElementById("btn-stop"),
  $btnReset = document.getElementById("btn-reset"),
  $reloj = document.getElementById("reloj");

let tempo,
  min = 0,
  seg = 0,
  mili = 0;

document.addEventListener("click", (e) => {
  if (e.target === $btnPlay) {
    tempo = setInterval(() => {
      mili++;

      if(mili  === 10){
        seg++;
        mili = 0;
      }
      if (seg === 60) {
        min++;
        seg = 0;
      }

      $reloj.innerHTML = `${("0" + min).substr(-2)}:${("0" + seg).substr(-2)}.${mili}`;
    }, 100);

    desactivarBtn($btnPlay)
    activarBtn($btnStop)
    activarBtn($btnReset)
  }

  if (e.target === $btnStop) {
    clearInterval(tempo);

    desactivarBtn($btnStop)
    activarBtn($btnContinue)
  }

  if (e.target === $btnReset) {
    clearInterval(tempo);
    min = 0;
    seg = 0;
    mili = 0;

    $reloj.innerHTML = `${"0" + min}:${"0" + seg}.${mili}`;

    desactivarBtn($btnReset)
    desactivarBtn($btnContinue)
    desactivarBtn($btnStop)
    activarBtn($btnPlay)
  }

  if(e.target === $btnContinue){
    tempo = setInterval(() => {
      mili++;

      if(mili  === 10){
        seg++;
        mili = 0;
      }
      if (seg === 60) {
        min++;
        seg = 0;
      }

      $reloj.innerHTML = `${("0" + min).substr(-2)}:${("0" + seg).substr(-2)}.${mili}`;
    }, 100);

    desactivarBtn($btnContinue)
    activarBtn($btnStop)
  }
});

darkmode('theme-btn','[darkmode]')