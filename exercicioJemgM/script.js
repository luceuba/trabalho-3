/*Elabore um  programa que efetue a leitura de 10 valores numericos e apresente
no final o total do somatorio e  a media dos valores lidos.*/
alert("Bem vindo!");
let i=0, somatorio=0;
while(i<10){
let valor=parseInt(prompt("informe um valor:"));
  
   somatorio= somatorio+valor
   i++
}
media=somatorio/10
document.body.innerHTML+=`somatorio:${somatorio} e media:${media}` 
