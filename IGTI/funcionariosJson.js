var fs = require("fs");
var funcionarios = null;

fs.readFile("funcionarios.json", "utf-8", function(err, data){
    if(err) {
        console.log(err);
    } else {
        funcionarios = JSON.parse(data).funcionarios;
        console.log("Maior salário: " + JSON.stringify(maiorMenorSalario(null, true)));
        console.log("Maior salário Administrativo: " + JSON.stringify(maiorMenorSalario("Administrativo", true)));
        console.log("Maior salário Comercial: " + JSON.stringify(maiorMenorSalario("Comercial", true)));
        console.log("Maior salário Produção: " + JSON.stringify(maiorMenorSalario("Produção", true)));

        console.log("Menor salário: " + JSON.stringify(maiorMenorSalario(null, false)));
        console.log("Menor salário Administrativo: " + JSON.stringify(maiorMenorSalario("Administrativo", false)));
        console.log("Menor salário Comercial: " + JSON.stringify(maiorMenorSalario("Comercial", false)));
        console.log("Menor salário Produção: " + JSON.stringify(maiorMenorSalario("Produção", false)));

        console.log("Media salarial da empresa: " + media());
        console.log("Media salarial Administrativo: " + media("Administrativo"));
        console.log("Media salarial Comercial: " + media("Comercial"));
        console.log("Media salarial Produção: " + media("Produção"));
    }
});

function maiorMenorSalario(setor, maior) {
    var  func = null;
    for(var i = 0; i < funcionarios.length; i++){

        if(setor && (funcionarios[i].setor !== setor)){
            continue;
        }
        if (func === null){
            func = funcionarios[i];
            continue;
        }

        if(maior && (funcionarios[i].salario > func.salario)){
            func = funcionarios[i];
        } else if(! maior && (funcionarios[i].salario < func.salario)){
            func = funcionarios[i];
        }
    }
    return func;
}

function media(setor){
    var total = 0;
    var qtd = 0;
    for (var i = 0; i < funcionarios.length; i++){
        if(setor && (funcionarios[i].setor !== setor)){
            continue;
        }
        qtd++;
        total += funcionarios[i].salario;
    }
    var media = total / qtd;
    return media;
}
