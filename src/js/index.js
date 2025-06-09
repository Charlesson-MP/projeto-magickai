// passo 1 - pegar o botão do aplicar filtros do html e mandar pro js
const botaoFiltrar = document.querySelector('.btn-filtrar');

// passo 2 - escutar o clique no botão e aplicar filtros
botaoFiltrar.addEventListener('click', () => {
// passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach((carta) => {
        const categoriaCarta = carta.dataset.categoria || ""; // Evita valores indefinidos
        const precoCarta = parseFloat(carta.dataset.preco) || 0; // Garante valor numérico

        let mostrarCarta = true;

        // Verifica a categoria APENAS se o usuário tiver selecionado uma
        if (categoriaSelecionada !== "" && categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase()) {
            mostrarCarta = false;
        }

        // Verifica o preço APENAS se o usuário tiver inserido um valor
        if (precoMaximoSelecionado !== "" && precoCarta > parseFloat(precoMaximoSelecionado)) {
            mostrarCarta = false;
        }

        // Aplica classes para mostrar ou esconder cartas
        carta.classList.toggle('mostrar', mostrarCarta);
        carta.classList.toggle('esconder', !mostrarCarta);
    });

})