const readline = require("readline");
const { calcular } = require("./cal"); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", function(a) {
    rl.question("Digite o segundo número: ", function(b) {

        let n1 = Number(a);
        let n2 = Number(b);

        const resultados = calcular(n1, n2);

        console.log("\nResultados:");
        console.log("Número A:", n1);
        console.log("Número B:", n2);

        console.log("Soma:", resultados.soma);
        console.log("Subtração:", resultados.subtracao);
        console.log("Multiplicação:", resultados.multiplicacao);
        console.log("Divisão:", resultados.divisao);
        console.log("Resto:", resultados.resto);
        console.log("Potência:", resultados.potencia);
        console.log("Raiz quadrada de A:", resultados.raizA);
        console.log("Raiz quadrada de B:", resultados.raizB);
        console.log("Porcentagem:", resultados.porcentagem);

        rl.close();
    });
});
