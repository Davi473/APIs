class Web
{
    constructor(site)
    {
        this.site = site;
    }

    async get(url)
    {
        return await this.request("get", url);
    }

    async post(url, valeu)
    {
        return await this.request("post", url, value);
    }

    async request(tipo, url, value)
    {

        let response = await fetch(this.site + url,
            {
                method: tipo,
                headers: { "content-type": "application/json" },
                body: JSON.stringify(value)
            }
        );
        return await response.json();
    }
}