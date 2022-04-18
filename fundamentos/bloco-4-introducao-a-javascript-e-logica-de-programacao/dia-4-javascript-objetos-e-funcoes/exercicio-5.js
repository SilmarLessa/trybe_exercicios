function indicieMenor(arrays){
    let numeros = 0;
    for(let index in arrays){
        if(arrays[numeros] > arrays[index]){
            numeros = index

        }

    }
    return numeros
}
console.log(indicieMenor([2, 4, 6, 7, 10, 0, -3]));