
class Stocks
{
    constructor(nome, ativos) 
    {
        this.nome = nome;
        this.ativos = ativos;
        this.nAtivos;
        this.quantidadeTotal;
        this.valorTotal;
        this.media;
    }
    
    /*
        get e set
    */

    getNome()
    {
        return this.nome;
    }

    getQuantidadeTotal()
    {
        return this.quantidadeTotal;
    }

    getValorTotal()
    {
        return (this.valorTotal).toFixed(2);
    }

    getMedia()
    {
        return this.media;
    }

    /*
        metodos
    */

    calcularMedia() 
    {
        let quantidade = 0;
        let valor = 0
        for(const stock in this.ativos)
        {
            quantidade += this.ativos[stock].quantidade;
            valor += this.ativos[stock].valorTotal;
        }
        let media = (valor / quantidade).toFixed(2);

        this.media = media;
        this.valorTotal = valor.toFixed(2);
        this.quantidadeTotal = quantidade;
    }

    organizar()
    {
        this.calcularMedia();
    }
}
module.exports = Stocks;
