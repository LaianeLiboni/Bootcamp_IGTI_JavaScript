var carros = ["Gol", "Palio", "Uno"];
console.log(carros);

console.log("primeira posição" + carros[0]);
console.log("segunda posição" + carros[1]);
console.log("terceira posição" + carros[2]);

carros[2] = "Argo";
console.log(carros[2]);

console.log(carros[2]);

console.log("tamanho do array: " + carros.length);
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros[3] = "Sandero";
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros[carros.length] = "Fit";
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros.push("Polo");
console.log(carros);




