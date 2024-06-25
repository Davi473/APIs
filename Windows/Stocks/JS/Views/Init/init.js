class Dados
{
    constructor(dados) 
    {
        this.dados = dados;
    }

    async init()
    {
        let valor = await this.dados.get("/acoes");
        for ()
        let entrada = document.querySelector("tbody");
        let acoes = 1;
        for (const dado of valor) 
        {
            entrada.insertAdjacentHTML("beforeend",`
                <tr>
                    <th scope="row">${acoes}</th>
                    <td>${dado.nome}</td>
                    <td>${dado.quantidade}</td>
                    <td>${dado.valorTotal}</td>
                    <td>${dado.valorCada}</td>
                </tr>
            `);
            acoes++;
        }
    }
}