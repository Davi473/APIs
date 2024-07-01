class Model
{
    constructor(dados)
    {
        this.dados = dados
    }

    async chamadoActive()
    {
        return await this.dados.get("/activeCurrent");
    }
}