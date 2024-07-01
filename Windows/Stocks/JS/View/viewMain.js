class View
{
    tabelaActiveMedia(value)
    {        
        let tabela = `
            <tr>
                <td>${value.nome}</td>
                <td>${value.quantidade}</td>
                <td>${value.media}</td>
                <td>${value.valorTotal}</td>
            </tr>
        `
        return tabela
    }

    tabelaCaberalio()
    {
        let tabela = `
        <table>
            <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Media</th>
                <th>Valor Total</th>
            </tr>
        </table>
        `
        return tabela
    }


    animacaoTabela(local)
    {
        let entrada = document.querySelector(local, tabela);
        entrada.insertAdjacentHTML("beforeend",`
            <div class="d-grid gap-2 col-6 mx-auto">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                            <button class="btn btn-outline-dark" type="submit">Open</button>
                        </div>
                    </div>
                </nav>
                ${tabela}
            </div>
        `);
    }
}