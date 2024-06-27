alert("Bem-vindo!");
/*F. Apresentar todos os números inteiros positivos divisíveis por 4 que sejam
menores que 200. Para verificar se o número é divisível por 4, efetue dentro do
laço a verificação lógica desta condição com a condicional if, perguntando se o
número é divisível; sendo, mostre-o, não sendo, passe para o próximo passo. A
variável que controlará o contador deverá ser iniciada com valor 1.*/

// Usando um laço for para iterar de 1 até 199
for (let i = 1; i < 200; i++) {
    // Verificando se o número é divisível por 4
    if (i % 4 === 0) {
        // Mostrando o número divisível por 4
        document.body.innerHTML += `<p> O n° ${i} é divisivel por 4 </p>`;
    }
} 