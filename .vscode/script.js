function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-mari.jpeg")
    // img.setAttribute("alt", "Mari fazendo careta engraçada")
  } else {
    // se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light-mari.jpeg")
    // img.setAttribute("alt", "Mari sorrindo")
  }
}

// desafio de alterar a descrição alternativa das imagens do profile.
