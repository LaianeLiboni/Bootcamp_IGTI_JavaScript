var soma = 4 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 6 / 2;
var resto = 20 % 3;

console.log("soma: " + soma);
console.log("subtracao: " + subtracao);
console.log("multiplicacao:" + multiplicacao);
console.log("divisao: " + divisao);
console.log("resto: " + resto);

var num1 = 10;
var num2 = 50;

var resultado = (num1 + num2) / (8 + 2);
console.log("precedencia: " + resultado);

var incremento = 1;
incremento = incremento + 1;
incremento++;

console.log("incremento: " + incremento);

var atribuicaoComAdicao = 5;
atribuicaoComAdicao +=6; // o mesmo que a = a + 6
console.log("atribuicao com adicao: " + atribuicaoComAdicao);

var decremento = 5;
decremento = decremento - 1;
decremento--;
console.log("decremento: " + decremento);

var atribuicaoComSubtracao = 10;
atribuicaoComSubtracao -= 4;
console.log("atribuicao com subtracao: " + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 4;
atribuicaoComMultiplicacao *= 5;
console.log("atribuicao com multiplicao" + atribuicaoComMultiplicacao);

var a = 4;
var b = 3;
var adicaoIncrementoPosterior = a + b++;
console.log(adicaoIncrementoPosterior);

var adicaoIncrementoAnterior = a + ++b;
console.log(adicaoIncrementoAnterior);