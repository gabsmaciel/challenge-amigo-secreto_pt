function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nomeAmigo;
    lista.appendChild(item);

    inputAmigo.value = "";
}

function sortearAmigo() {
    const listaAmigos = Array.from(document.getElementById('listaAmigos').children);
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado].textContent;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
