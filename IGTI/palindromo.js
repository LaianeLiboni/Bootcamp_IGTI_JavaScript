//carro
//orrac

//Parte 1 - receber uma palavra e guardar em uma variavel
//Parte 2 - inverter a palavra e armazenar em outra variavel
// Parte 3 - comprarar a palavra original com a invertida, se for igual é palindromo


var palavra = "carro";
var palavraInvertida = "";

/*console.log(palavra[0]);
console.log(palavra[1]);
console.log(palavra[2]);
console.log(palavra[3]);
console.log(palavra[4]);*/

/*for (var i = 0; i < palavra.length; i++){
    palavraInvertida = palavraInvertida + palavra[i];
}*/

for (var i = palavra.length-1; i >= 0; i-- ){
    console.log(i);
    palavraInvertida = palavraInvertida + palavra[i];
}
console.log(palavra);
console.log(palavraInvertida)

if(palavra === palavraInvertida){
    console.log(palavra + " é um palíndromo.")
}else{
    console.log(palavra + " não é um palíndromo")
}
