let contador=document.querySelector("#contador")
let botao=document.querySelector("#like")
let comp = false
let valor=0

botao.addEventListener("click", function(){
    if (comp==false){
    valor=valor+1
    contador.textContent=valor
        comp=true
    }else{
    valor=valor-1
    contador.textContent=valor
        comp=false   
    }
})