var a = 50;
var b = 40;
if(a > b){
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}else if(b < a){
    //senao, executa o codigo abaixo
    console.log("b maior do que a");
}else{
    console.log(" a e b são iguais");
}

if(a > b){
    console.log("executar somente se a > b");
}
console.log("sempre executar");

var c = 40;
var d = 30;
if(c >= d){
    console.log("c maior ou igual a d");
}

var e = 10;
var f = 10;

if( e === f){
    console.log("e é igual a f")
}

var g = 10;
var h = 11;

if( g != h){
    console.log("g diferente de h")
}

var i = 4;
var j = 3;
var k = 5;
var l = 7;

if((i > j) && (l > k)){
    console.log("i maior que j");
}

if ((i ===j) || (k === l)){
    console,log("um dos dois eram validos");
}

if(!(1 > 2)){
    console.log("execute");
}

var fruta = "abacaxi";
var valor = 0;
if(fruta === "banana"){
    valor = 2;
}else if(fruta === "abacaxi"){
    valor = 3;
}else if(fruta == "melao"){
    valor = 5;
}else{
    valor = 10;
}
//console.log("valor: " + valor);

switch (fruta){
    case "banana":
        valor = 2;
        break;
    case "maca":
        valor = 3;
        break;
    case "melao":
        valor = 4;
        break;
    default:
        valor = 10;
}
console.log("valor: " + valor);

var x = 1;
var y = 2;
if(x > y){
    resultado = "x maior que y";
}else if(x < y){
    resultado = "senao";
}
console.log(resultado);

resultado = x > y ? "x maior que y" : "senao";
console.log(resultado);
