function verificaPalimedro(silmar){
let palavra = silmar.split('').reverse().join('');
if(silmar === palavra){
    return true
}
else{
    return false
}
}
console.log(verificaPalimedro('ovo'));
