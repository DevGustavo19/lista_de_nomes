const nomes = ["Gustavo Santos de Andrade"]
const lista = document.getElementById("lista")

// Função para exibir a lista na tela
function mostrarLista() {
    lista.innerHTML = ""
    for (let nome of nomes){
        lista.innerHTML += `<li>${nome}</li>`  
    }
}

// Mostra a lista inicial
mostrarLista()

// Captura o envio do formulário para adicionar novos nomes via input
const form = document.getElementById("formNome")
const input = document.getElementById("inputNome")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    nomes.push(input.value)
    mostrarLista()
    input.value = ""
})