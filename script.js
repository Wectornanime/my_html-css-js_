var hamburguer = document.querySelector(".hamburguer")
const closeImgButton = 'images/buttons_icon/close_circular_button.png'

hamburguer.addEventListener("click", function(){
    document.querySelector(".slidebar").classList.toggle("show-menu");
    document.querySelector(".hamburguer").classList.toggle("show-menu");
});

document.querySelector(".media-play").addEventListener("click", function(){
    document.querySelector(".controls").classList.toggle("play")
});

document.querySelector(".media-pause").addEventListener("click", function(){
    document.querySelector(".controls").classList.toggle("play")
});
