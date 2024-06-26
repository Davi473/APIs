class Dados
{
    constructor(dados) 
    {
        this.dados = dados;
        this.arrayDividos = [];
        this.dividendosMensais = 0;
        //new GraficoBarChart().init();
    }

    async init()
    {
        let valor = await this.dados.get("/dividendos");
        this.entrada = document.querySelector("tbody");
        for (const dado of valor) 
        {
            this.porMeses(dado)
            console.log(this.arrayDividos)
        }
    }

    porMeses(dados)
    {
        const meses = ["jan", "fev", "mar", "abr", "mai"]
        for (const mes of meses)
        {
            this.dividendosMensais = 0;
            for (let i = 0; i <= dados.dividendos[mes].length; i++)
            {
                if (dados.dividendos[mes][i] != undefined)
                {
                    this.construirTable(dados.dividendos[mes][i])
                }
            }
            this.arrayDividos.push(this.dividendosMensais);
        }
    }

    construirTable(dados)
    {
        this.entrada.insertAdjacentHTML("beforeend",`
            <tr>
                <td>${dados.categoria}</td>
                <td>${dados.ativo}</td>
                <td>${dados.quantidade}</td>
                <td>${dados.tipo}</td>
                <td>${dados.dataCom}</td>
                <td>${dados.dataPagamento}</td>
                <td>${dados.valorDoDividendo}</td>
                <td>${dados.total}</td>
                <td>${dados.totalLiquido}</td>
            </tr>`
        )
        this.dividendosMensais = this.dividendosMensais + dados.totalLiquido;
    }

}