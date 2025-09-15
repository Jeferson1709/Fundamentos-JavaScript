    // Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo = 1000;
const saque = 50;
const deposito = 500;
const operacao = saldo - saque;

console.log('Saldo:', saldo); 
console.log('Saldo após saque:', operacao);


    // Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
    let numero = 10;
    let operacaoTernaria = numero ? "true" : "false";



    // Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

    let temPermissao = true;
    let credencial = true;

    if (temPermissao && credencial) {
        console.log('Permissao concedida!');
    }else {
        console.log('Permissao não concedida!');

    }



    // Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

    let verdadeiro =  true ;
    let falso = false;

    if (verdadeiro === true|| falso ===true) {
        console.log('Funcionou');
    }else{
console.log('Não funcionou.');
    }

    // Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

    
    let idadeMinima=  18; 
    let idadeDoUsuario =17;
    if (idadeDoUsuario >= idadeMinima) {
        console.log('Tem permissão para comprar.');
    }else {
        console.log('Não tem permissão para comprar.');

    }