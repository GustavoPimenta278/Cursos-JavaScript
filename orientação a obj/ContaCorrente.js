export class contaCorrente {
    agencia;
    cliente;
    saldo = 0;


    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente!')

        }   else this.saldo -= valor;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log('Valor de deposito invalido!');
        } else this.saldo += valor;
    }

    transferir(valorTransf, conta) {
        this.sacar(valorTransf);
        conta.depositar(valorTransf);

    } 

}
