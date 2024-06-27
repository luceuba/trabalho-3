/*G.Elaborar um  programa que apresente os valores de conversão de graus Celcius em Fahreheit, de 10 em 10 graus, iniciando a contagem 
 em 10 graus Celcius e finalizando em 100 graus Ceusius. O programa devera apresentar os valores das  duas temperaturas.*/
alert("Bem-vindo!");
let C = 10;
while ( C<100){
   F =((9*C) + 160)/5;
   document.body. innerHTML+=`o valor em ${C}Cº equivale á${F}Fº<br>`
 C+=10
}

