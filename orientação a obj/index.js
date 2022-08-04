import {cliente} from "./Cliente.js";
import {contaCorrente} from "./ContaCorrente.js";

//Criando o cliente1
const cliente1 = new cliente();
cliente1.nome = 'Gustavo';
cliente1.sobrenome = 'Pimenta';
cliente1.cpf = 55136903813;

const contaCorrente_cliente1 = new contaCorrente();
contaCorrente_cliente1.agencia = 1069
contaCorrente_cliente1.cliente = cliente1
contaCorrente_cliente1.depositar(900)



//Criando o cliente 2
const cliente2 = new cliente();
cliente2.nome = 'Alice'
cliente2.sobrenome = 'Galliard'
cliente2.cpf = 12345678945

const conta2 = new contaCorrente();
conta2.agencia = 1293;
conta2.cliente = cliente2

contaCorrente_cliente1.transferir(900, conta2)

console.log(contaCorrente_cliente1);
console.log(conta2);
