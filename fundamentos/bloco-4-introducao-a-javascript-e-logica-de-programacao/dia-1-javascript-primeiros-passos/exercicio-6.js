let xadrez = 'pawn';
let minusculo = xadrez.toLowerCase();
console.log(minusculo);
let maisculo = xadrez.toUpperCase();
console.log(maisculo);
if (xadrez !== 'pawn'){
    console.log('Erro na peça')
}
if (xadrez === 'pawn'){
    console.log('pawn tem a primeira jogada podendo ir duas ou uma casa pra frente. A partir daí só pode ir uma casa para frente.')
}