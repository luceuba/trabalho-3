alert("Bem-vindo!"); 
/*Elaborar um programa que efetue o cálculo e no final apresente o somatório do
número de grãos de trigo que se pode obter num tabuleiro de xadrez,
obedecendo à seguinte regra: colocar um grão de trigo no primeiro quadro e nos
quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro quadro
coloca-se 1 grão, no segundo quadro colocam- -se 2 grãos (neste momento
têm-se 3 grãos), no terceiro quadro colocam- -se 4 grãos (tendo neste momento
7 grãos), no quarto quadro colocam- -se 8 grãos (tendo-se então 15 grãos) até
atingir o sexagésimo quarto quadro (Este exercício foi baseado numa situação
let totalGraos = 0;
let graos = 1;  // Começamos com 1 grão no primeiro quadro
let quadro = 1;

while (quadro <= 64) {
    totalGraos += graos;  // Adicionamos os grãos do quadro atual ao total
    document.body.innerHTML += `<p> Quadro ${quadro}: ${graos} grãos - Total acumulado: ${totalGraos} grãos </p>`;
    graos *= 2;  // Dobramos a quantidade de grãos para o próximo quadro
    quadro++;  // Incrementamos o quadro
}

document.body.innerHTML += `<p> Total de grãos no tabuleiro de xadrez: ${totalGraos} grãos. </p>`;
