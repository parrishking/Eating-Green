let menu = document.querySelector(".menu")
let about = document.querySelector(".about")
let contact = document.querySelector(".contact")
let home = document.querySelector(".home")
let columnMiddle = document.querySelector(".columnMiddle")
let columnLeft = document.querySelector(".columnLeft")
let columnRight = document.querySelector(".columnRight")
let video = document.querySelector(".video")

menu.onclick = function(){
  columnMiddle.style.display = "block"
  columnLeft.style.display = "none"
  columnRight.style.display = "none"
  video.style.display = "none"
}

about.onclick = function(){
  columnMiddle.style.display = "none"
  columnLeft.style.display = "block"
  columnRight.style.display = "none"
  video.style.display = "none" 
}

contact.onclick = function(){
  columnMiddle.style.display = "none"
  columnLeft.style.display = "none"
  columnRight.style.display = "block"
  video.style.display = "none"
}

home.onclick = function(){
  columnMiddle.style.display = "none"
  columnLeft.style.display = "none"
  columnRight.style.display = "none"
  video.style.display = "block" 
}