class Cliente {
    nome;
    cpf;
}

class ContaCorretne{
    agencia;
    _saldo =0;

    sacar(Valor){
        if(this._saldo >= Valor){
            this._saldo -= Valor;
            return Valor;
        }

    }

    depositar(Valor){
        if(valor > 0)
        {
            return;
        }
            this._saldo += Valor;

        }
    }
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(contaCorrenteRicardo,saldo);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100) += 200;
contaCorrenteRicardo._saldo += -1;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);