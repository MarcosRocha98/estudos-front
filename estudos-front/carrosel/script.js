/**
 * Simples carrossel de imagens
 * @author Marcos Rocha Silva
 */

// Captura a tag <div> que contém as imagens e armazena em imgs
let imgs = document.getElementById('imagens')

// Sera usada na interação com o CSS
let imagem = document.querySelectorAll('#imagens img')

// Criar uma variavel para iniciar o vetor de imagens
// [0]bike1 [1]bike2 [2]bike3
let indice = 0

function carrossel() {
    indice++ //troca da imagem
    if (indice >= imagem.length) {
        indice = 0;
    }
    // Manipula o CSS. deslocando as imgs a esquerda (eixo X negativo)
    // Para manipular o CSS é o style
    imgs.style.transform = `translate(${-indice * 512}px)`
}

// Executa automáticamente a função a cada 2 segundos
// Não utiliza () para executar a função
// setInterval (nome da função, tempo em milisegundos)
setInterval(carrossel, 2000)