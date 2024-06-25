class Dados
{
    constructor(dados) 
    {
        this.dados = dados;
    }

    async init()
    {
        let valor = await this.dados.get("/acoes");
        let entrada = document.querySelector("tbody");
        console.log(valor)
        let acoes = 1;
        for (const dado of valor) 
        {
            entrada.insertAdjacentHTML("beforeend",`
                <tr>
                    <th scope="row">${acoes}</th>
                    <td>${dado.nome}</td>
                    <td>${dado.quantidadeTotal}</td>
                    <td>${dado.media}</td>
                    <td>${dado.valorTotal}</td>
                </tr>
            `);
            acoes++;
        }
    }
}