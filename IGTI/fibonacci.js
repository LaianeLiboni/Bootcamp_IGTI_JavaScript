/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
*/

//Parte 1 - encontrar a sequencia de Fibonacci ate 4000000
//Parte 2 - percorrer a sequencia gerada encontrando os numeros pares
//Parte 3 - somar os numeros

var array = [1, 2];
var valor = 3;

//Parte 1
while(valor <= 4000000){
    array.push(valor);

    //var ultimaPosicao = array.length - 1;
    //var penultimaPosicao = array.length - 2;
    valor = array[array.length - 1] + array[array.length - 2];
}

//Parte 2
var pares = [];
for (var i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
        pares.push(array[i]);
    }
}

//Parte 3
var soma = 0;
for (var i = 0; i < pares.length; i++){
    soma = soma + pares[i];
}
console.log(soma);
