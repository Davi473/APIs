const express = require("express");
const path = require("path");
const axios = require("axios")
const app = express();
app.use(express.json());
// View main
app.use("/", express.static("../Windows/Stocks/Views"));

// Arquivos CSS
app.use("/CSS", express.static("../Windows/Stocks/CSS"));

// Arquivos JS
app.use("/JS", express.static("../Windows/Stocks/JS"));


app.get("/acoes", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:3000/acoes");
        res.json(response.data);
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
        res.status(500).json({ error: "Erro ao obter dados" });
    }
});

let porta = 3002
app.listen(porta);
console.log(porta);