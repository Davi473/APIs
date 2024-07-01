
class Controllers
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
    }

    async init()
    {
        let todosActive = await this.model.chamadoActive();
        for(let active in todosActive)
        {
            this.view.tabelaActiveMedia("main", todosActive[active])
        }
    }
}