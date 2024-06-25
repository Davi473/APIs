class Stocks
{
    constructor(nome, ativos) 
    {
        this.nome = nome;
        this.ativos = ativos;
    }

    media() 
    {
        let somaQ = 0;
        let somaValorT = 0;
        for(const stock in this.ativos)
        {
            somaQ += this.ativos[stock].quantidade;
            somaValorT += this.ativos[stock].valorTotal;
        }
        return {
            nome: this.nome,
            media:(somaValorT / somaQ).toFixed(2),
            valorTotal: somaValorT.toFixed(2),
            quantidade: somaQ
        };
    }
}

module.exports = Stocks;