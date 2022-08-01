class contaCorrente {
    agencia;

    // O # torna o atributo oculto para o resto do programa
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor

            return this.#saldo
        } else console.log("Saldo insuficiente!");
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor

            return this.#saldo
        } else console.log("Valor de deposito invalido!");
    
    }
};
