/*L.Elaborar um programa que efetue a leiturade 15 valores numericos inteiros e no final apresente o total do 
somatório da fatorial de cada valor lido.*/
alert("Bem-vindo!");
//laço dentro do laço
let i=0, somatorio=0;
while(i<15){
let valor= parseInt(prompt("informe um valor;"));
let fatorial=1
   while(valor>0){
   fatorial= fatorial*valor
   valor--;
  }
  somatorio=somatorio+fatorial
i++
}
document.body.innertHTML+=`${somatorio}`
