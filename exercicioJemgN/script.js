/*Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O
programa deve fazer as leituras dos valores enquanto o usuário estiver
fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário
fornecer um valor negativo (menor que zero).*/
let soma = 0;
let quantidade = 0;
let valor;

// Array para armazenar os valores lidos (opcional, dependendo do contexto)
let valores = [];

// Loop para ler os valores enquanto forem positivos
do {
    valor = parseInt(prompt("Digite um valor numérico positivo (ou um valor negativo para encerrar):"));

    if (valor >= 0) {
        soma += valor; // Adiciona o valor ao somatório
        quantidade++; // Incrementa a quantidade de valores lidos
        valores.push(valor); // Adiciona o valor ao array de valores (opcional)
    }
} while (valor >= 0);

if (quantidade === 0) {
    alert("Nenhum valor positivo foi digitado.");
} else {
    let media = soma / quantidade; // Calcula a média

document.body.innerHTML += `<p> \nValores digitados: ${valores.join(', ')} </p>`;
document.body.innerHTML += `<p> Total do somatório: ${soma} </p>`;
document.body.innerHTML += `<p> Média dos valores: ${media.toFixed(2)} </p>`;
document.body.innerHTML += `<p> Total de valores lidos: ${quantidade} </p>`;
}
