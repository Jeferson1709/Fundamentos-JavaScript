    // Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

    let nome = 'Jeferson';
    let idade = 21;
    let status = true;

    console.log(`Aluno: ${nome} de ${idade} idade, Status: `+status);

    // Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
    let firstname ='Jeferson';
    let lastname ='Alves';
    let name = firstname +" "+  lastname
    let nameTemplate =` `;
    console.log(name + nameTemplate);

    // Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
    let number = 10;
    let word = 'happy';
    let test = `${number} + ${word}`;
    console.log(test);

    // Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let texto ='Hoje é dia de Codar';
console.log(texto);

texto =10;

console.log(texto);

    // Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

    var teste =10;
    if (true) {
        test =19;
console.log(teste);
    }

    console.log(teste);
    let teste1 =10;
    if (true) {
       let teste1 =19;
console.log(teste1);
    }

    console.log(teste1);



    // Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

    let estaChuvendo = true;
    if (estaChuvendo) {
        console.log('Leve o guarda chuva!');
    }else{
        console.log('Não é necessário levar o guarda chuva!');

    }