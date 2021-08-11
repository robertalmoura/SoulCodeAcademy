
// 1) Crie um programa que tenha um botão em html que ao ser clicado acesse uma função que peça para o usuário digitar um numero N que seja maior que 0 e menor que 10 que corresponderá a quantidade de números do Array, que serão temperaturas. Em seguida, leia também um número M que seja maior que 0 e menor que 10 que corresponderá a quantidade de nomes que serão inseridos em um outro Array. Em seguida, utilizando o prompt de comando, receba a quantidade N de temperaturas e armazene no Array. Utilize o prompt para receber quantidade M de nomes e armazene no outro vetor. Ao final, siga as instruções abaixo:

// • Verifique se no vetor de nomes existe o nome “Eliana”
// • Exiba na tela as temperaturas maiores que 20.
// • Exiba a posição do nome “Carlos” caso exista. Caso não exista, informe ao usuário.
// • Exiba o cubo dos números do Array de números.

function resultado() {

var qtdd = parseInt(prompt("Digite um número >0 e <10 para lista temperaturas: "));
var lista = [];


for (i = 0; i < qtdd; i++) {
    lista[i] = parseFloat(prompt("Digite uma temperatura: "));

}
document.write("<br> Itens na lista de temperatura = ", lista, "<br>");

var qtdd2 = parseInt(prompt("Digite um número >0 e <10 para lista nomes: "));
var lista2 = [];

for (i = 0; i < qtdd2; i++) {
    lista2[i] = prompt("Digite um nome: ");

}
document.write("Itens na lista de nomes = ", lista2, "<br>");


// 1)

var verifica = lista2.find(elemento => elemento === "Eliana");
if(verifica){
    document.write("Tem o nome Eliana está na lista.<br>");
} else { 
    document.write("Não tem o nome Eliana na lista.<br>");
}

//2)

for(var i = 0; i < lista.length; i++) {
    var verifica2 = lista.filter(elemento => elemento >20);
}   
    document.write("Temperaturas maiores de 20: ", verifica2, "<br>");


//3)
if (lista2.some(elementos => elementos == "Carlos")){
    document.write("O nome Carlos está na posição: ", lista2.findIndex(elementos => elementos == "Carlos"), "<br>")
} else document.write("Carlos não é um nome cadastrado. <br>")


//4)
for(var i = 0; i < lista.length; i++) {
    var triplo = lista.map(elemento => elemento * 3);
    
}
document.write("A lista de triplos é: ", triplo);
}
