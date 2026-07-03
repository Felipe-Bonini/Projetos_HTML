let titulo=document.querySelector("h1")
let text=document.querySelector("p")
let botao=document.querySelector("button")
let card=document.querySelector(".card")

let estado=false

botao.addEventListener("click", function(){
    if (estado==false){
    titulo.textContent="Jesus is King"
    text.textContent="HE IS ALIVE"

    card.style.backgroundColor="black"
    card.style.color="grey"

    estado=true
    }else{
        titulo.textContent="Felipe Bonini"
        text.textContent="Programador"

        card.style.backgroundColor="grey"
        card.style.color="black"

        estado=false
    }
})