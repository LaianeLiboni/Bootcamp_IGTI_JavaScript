console.log(process.argv);
var operacao = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var resultado = 0;

if(operacao === "soma"){
    resultado = num1 + num2;
}else if(operacao === "subtracao"){
    resultado = num1 - num2;
}else if(operacao === "multiplicacaoacao"){
    resultado = num1 * num2;
}else if(operacao === "divisao"){
    resultado = num1 / num2;
}else if(operacao === "resto"){
    resultado = num1 % num2;
}else if(operacao === "porcentagem"){
    resultado = num1 * num2 / 100;
}
//console.log(resultado);

switch(operacao){
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtracao":
        resultado = num1 - num2;
        break;
    case "multiplicação":
        resultado = num1 * num2;
        break;
    case "divisao":
        resultado = num1 / num2;
        break;
    case "resto":
        resultado = num1 % num2;
        break;
    case "porcentagem":
        resultado = num1 * num2 / 100;
        break;
    default:
        resultado = 0;
}
console.log(resultado);

