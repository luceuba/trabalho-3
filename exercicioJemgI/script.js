alert("Bem-vindo!"); 
/*I. Escreva um programa que apresente a série de Fibonacci até o décimo quinto
termo. A série de Fibonacci é formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34,
... etc. Esta série se caracteriza pela soma de um termo posterior com o seu
anterior subseqüente.*/ 
let a = 1;
let b = 1;

// Imprimimos os dois primeiros termos, que são fixos na série
document.body.innerHTML +=`<p> ${a} </p>`;
document.body.innerHTML +=`<p> ${b} </p>`;

// Calculamos e imprimimos os próximos 13 termos da série usando um loop while
let i = 2;
while (i < 15) {
    let c = a + b; // Calculamos o próximo termo
    document.body.innerHTML +=`<p> ${c} </p>`; // Imprimimos o próximo termo
    a = b; // Atualizamos o valor de 'a' para o valor de 'b'
    b = c; // Atualizamos o valor de 'b' para o valor de 'c'
    i++;
}