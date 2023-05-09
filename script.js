//Para começar selecionar os itens que precisamos
const input = document.querySelector("#input"); // o texto digitado pelo utilizador
const counter = document.querySelector(".counter"); //para mudar texto de palavras para caracteres e vice versa
const toggleButton = document.querySelector("#toggle"); //para o botao que vai fazer a mudança para a mensagem exibida "palavras ou caeactere"

//criar variavél para definir o que mostra no ecra
let mode = "characters";

toggleButton.addEventListener("click", () => {

    if(mode === "characters") {
        mode = "words";
        toggleButton.textContent = "Contar caracteres";
     }else{
        mode = "characters";
        toggleButton.textContent = "Contar Palavras";
     } 
     
     input.dispatchEvent(new Event("input"));       
});

 

input.addEventListener("input", () => {
    let count = 0;

    if(mode === "characters") {
        count = input.value.length;

        counter.textContent = `${count} caractere(s)`;
    } else{
        const words = input.value.trim().split(/\s+/);
      count = input.value.trim() === "" ? 0 : words.length;
      counter.textContent = `${count} palavras(s)`;
    }
});