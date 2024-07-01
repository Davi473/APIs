
class Controllers
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
        this.init();
    }

    init()
    {
        const valores = async function(model)
        {
            let todosActive = await model.chamadoActive();
            console.log(todosActive);
            for(let active in todosActive)
            {
                //this.view.tabelaActiveMedia("main", todosActive[active])
            }
            //valores(model);
        }
        //valores(this.model);    
        this.view.animacaoTabela("main");
    }
}