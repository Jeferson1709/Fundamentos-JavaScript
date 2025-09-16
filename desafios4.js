// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudacao(nome) {
    return `Olá seja bem-vindo ${nome}`;
}
console.log(saudacao("Jeferson"));





// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

function maiorIdade(idade) {
    if (idade > 17) {
        return 'Maior de idade.'
    } else {
        return 'Não é maior de idade.'
    }
}
console.log(maiorIdade(21));



// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}





// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.


function maiorValor(a, b, c) {
    if (a > b && a > c) {
        return a;
    } if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
let numeros = [1,2,3];
let maior = maiorValor(numeros[0],numeros[1],numeros[2]);
console.log(maior);



// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
function calculaPotencia(base,expoente) {
    return Math.pow(base,expoente);
}
console.log(calculaPotencia(2,3));
