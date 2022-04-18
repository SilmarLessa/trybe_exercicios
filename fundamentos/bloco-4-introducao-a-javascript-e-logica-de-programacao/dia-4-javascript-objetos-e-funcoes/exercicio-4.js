function indicieMaior(lista){
    let numeros = 0;
for(let index in lista){
    if(lista[numeros] < lista[index]){
        numeros = index
    }

}
return numeros

}
console.log(indicieMaior([2, 3, 26, 7, 10, 1]));

