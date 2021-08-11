//Faça um script  que contenha os seguintes cálculos e exiba na tela:
// 1. Exiba na tela a soma da sua idade some com a do seu filho(a); //quem não tem soma com 0.
// 2. O resultado a soma do item anterior, multiplique com a idade do seu pai;
// 3. Agora some a idade dos seus irmãos, multiplique com sua idade e divida com o resultado do item 01;
// 4. Agora, divida renda familiar pela quantidade de pessoas que compõem sua família e o resultado multiplique por 30;


// E por fim, exiba na tela os resultados com um texto concatenado.

var minhaidade = 39;
var idadefilho = 8;
var soma1 = minhaidade + idadefilho;
document.write("O resultado do item 1 é: ", soma1, ". ", "<br>")

var idadepai = 63;
soma2 = soma1 * idadepai;
document.write("O resultado do item 2 é: ", soma2, ". ", "<br>")

var irma = 35;
var irmao = 33;
var soma3 = irma + irmao;
var multiplicacao = soma3 * minhaidade;
var resultado2 = multiplicacao / soma1;
document.write("O resultado do item 3 é: ", resultado2, ". ", "<br>")

var renda = 5000;
var rendapc = renda / 5;
var resultado3 = rendapc * 3;
document.write("O resultado do item 4 é: ", resultado3, ". ", "<br>")
