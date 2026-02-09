// cal.js

function calcular(n1, n2) {
    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n1 / n2;
    let resto = n1 % n2;
    let potencia = n1 ** n2;
    let raizA = Math.sqrt(n1);
    let raizB = Math.sqrt(n2);
    let porcentagem = (n1 * n2) / 100;

    return {
        soma,
        subtracao,
        multiplicacao,
        divisao,
        resto,
        potencia,
        raizA,
        raizB,
        porcentagem
    };
}
module.exports = { calcular };
