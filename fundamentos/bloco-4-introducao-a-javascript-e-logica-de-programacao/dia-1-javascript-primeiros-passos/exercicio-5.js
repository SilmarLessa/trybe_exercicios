const anguloMaior = 85
const anguloMenor = 45
const anguloMeio = -50
let soma = anguloMaior + anguloMenor + anguloMeio;
let koker = anguloMaior < 0 && anguloMeio < 0 && anguloMenor < 0;
if (koker){

if (soma === 180){
    console.log(true)
}
else{
    console.log(false)
}}
if ( !koker) {
    console.log('Erro no sistema')
} 


