// 1 - Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.

let numero = prompt("Informe um número!");
let dobro = numero*2
alert("O dobro desse numero é "+ dobro + "!")

// 2 - Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.

let preco = parseInt(prompt("Qual o valor inicial da sua conta?"));
let garçom = parseInt(prompt("Qual é a taxa do garçom?"));
let total = preco + ((garçom/100)*preco);
alert("O valor total da sua conta foi de R$"+total+",00!");

// 3 - Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

let conta = parseInt(prompt("Qual o valor da conta?"));
let clientes = parseInt(prompt("Quantas pessoas vão dividir a conta?"));
let individual = conta/clientes;
alert("Cada cliente deve pagar R$"+individual+",00!");