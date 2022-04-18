/*Escreva uma função que vai receber dois parâmetros: vitória e empate, dito isso, retorne a quantidade de pontos que foi efetuado durante o campeonato
Considere que para cada vitória o time recebe 2 pontos e para cada empate o time recebe 1 ponto
Se existisse 14 vitórias e 8 empates, qual seria a quantidade de pontos?*/

function pontosDoTime(vitoria,empate){
    let totalDePontos = (14 * vitoria) + (8 * empate);
    return totalDePontos

}

console.log(pontosDoTime(2,1));