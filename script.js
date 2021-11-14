var hamburguer = document.querySelector(".hamburguer")
const closeImgButton = 'images/buttons_icon/close_circular_button.png'

hamburguer.addEventListener("click", function(){
    document.querySelector(".slidebar").classList.toggle("show-menu");
    document.querySelector(".hamburguer").classList.toggle("show-menu");
});
