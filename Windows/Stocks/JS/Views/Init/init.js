class View
{
    constructor(dados) 
    {
        this.dados = dados;
        this.init();
    }

    async init()
    {
        this.buttonNav()
        /*
        let valor = await this.dados.get("/stocks");
        let entrada = document.querySelector("tbody");
        let acoes = 1;
        for (const dado of valor) 
        {
            entrada.insertAdjacentHTML("beforeend",`
                <tr>
                    <th scope="row">${acoes}</th>
                    <td>${dado.nome}</td>
                    <td>${dado.quantidade}</td>
                    <td>${dado.media}</td>
                    <td>${dado.valorTotal}</td>
                </tr>
            `);
            acoes++;
        }
        */
    }

    buttonNav()
    {
        let buttonNav = document.querySelector(".navbar-brand")
        buttonNav.onclick = () => {
            const navbar = document.querySelector(".navbar-collapse > .navbar-nav");
            if (navbar == null) this.navAnimacao()
            if (navbar != null) document.querySelector(".navbar-nav").remove()
        }
    }
    
    navAnimacao()
    {
        let colocarValoresDeAnimacao = document.querySelector(".navbar-collapse");
        colocarValoresDeAnimacao.insertAdjacentHTML("beforeend",`
            <ul class="navbar-nav">
                <li>
                    <a class="nav-link text-dark" href="/Windows/Historico/Views/index.html">Historico Investment</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="/Windows/Proventos/Views/index.html">Proventos</a>
                </li>
            </ul>
        `);
    }
}