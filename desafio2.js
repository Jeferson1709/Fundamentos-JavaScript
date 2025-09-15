    // Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

    let frase ='Programar é divertido e desafiador';
    console.log(frase.length);
    console.log(frase.toUpperCase());
    
    // Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

    let a = null;
    let b;

    console.log(a);
    console.log(b);
    
    

    // Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

let number = 100;
let string = 'Letras';
let verdadeiro= true;

console.log(`Numero: ${number} String: ${string} Boolean: ${verdadeiro}`);


    // Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

let numero = String(12);
let letras = Number('12');

console.log(typeof numero);
console.log(typeof letras);




    // Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.


    let testeString = 'Casa';
    console.log(testeString.toUpperCase());
    console.log(testeString.toLowerCase());
    console.log(testeString.slice(1,2));