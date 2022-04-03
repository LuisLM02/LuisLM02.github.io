export default function responsiveMenu(btnMenu, menu) {
  const $btnMenu = document.querySelector(btnMenu),
    $menu = document.querySelector(menu);
  let open = false;

  if (window.innerWidth > 900) {
    $menu.classList.remove("responsive");
    $menu.classList.add("default");
  }else{
    $btnMenu.classList.remove('desactive');
  }

  window.addEventListener("resize", (e)=>{
    if(window.innerWidth > 900) {
      $menu.classList.remove('responsive');
      $btnMenu.classList.add('desactive');
      $menu.classList.add('default');
    }else{
      $menu.classList.remove('default');
      $menu.classList.add('responsive');
      $btnMenu.classList.remove('desactive')
    }
  })

  $btnMenu.addEventListener("click", (e) => {
    if (!open) {
      $btnMenu.classList.add("open");
      $menu.classList.add("active");
      open = true;
    } else {
      $btnMenu.classList.remove("open");
      $menu.classList.remove("active");
      open = false;
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      $btnMenu.classList.remove("open");
      $menu.classList.remove("active");
      open = false;
    }
  });
}
