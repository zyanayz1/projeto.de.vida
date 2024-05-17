const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for(let i=0; i<botoes.length; i=i+1){
    botoes[i].onclick = function(){
        botoes[i].classList.add("ativo")
    }
    console.log(i)
}
