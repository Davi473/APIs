class View
{
    tabelaActiveMedia(local, value)
    {
        let entrada = document.querySelector(local);
        entrada.insertAdjacentHTML("beforeend",`
            <tr>
                <td>${value.nome}</td>
                <td>${value.quantidade}</td>
                <td>${value.media}</td>
                <td>${value.valorTotal}</td>
            </tr>
        `);
    }
}