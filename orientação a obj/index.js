// ----------- MOLDES -----------
import {client} from "./Client";
import {contaCorrente} from "./ContaCorrente";





//Declarando os clientes
const Gustavo = new client();
Gustavo.nome = "Gustavo Alves Pimenta";
Gustavo.cpf = 31830963155;

//Conta dos clientes
const contaCorrenteGustavo = new contaCorrente()
contaCorrenteGustavo.agencia = 1609


// EXECUÇÃO DO PROGRAMA
console.log(Gustavo);
console.log(contaCorrenteGustavo);

console.log(contaCorrenteGustavo.depositar(400))

console.log(contaCorrenteGustavo.sacar(300));
