alert("Bem-vindo!");
/* Apresentar os resultados de uma tabuada de um número qualquer, a qual deve
ser impressa no seguinte formato:
Considerando como exemplo o fornecimento do número 2 para o número
quaisquer, ter-se-ia a seguinte situação:

2 X 1 =2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
(...)
2 X 10 = 20 */

let num = parseInt(prompt('Informe o valor'));
let tabuada = "";
for (let i=0;i<=10;i++){
		tabuada+= `${num} x ${i} = ${num*i} \n`;
}
alert(tabuada);
