/*1. true + true = true
2. true + false = false
3. false + false = false
Escreva um código que compare o conteúdo de dois parâmetros e retorne um resultado booleano de acordo com a tabela acima.*/

function comparando(futebol,volei){
    if(futebol === volei){
        return(true)
    }
    else{
        return(false)
    }
   
}

console.log(comparando('bola','bola'));