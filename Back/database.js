const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const dbFilePath = 'arquivo.db';

// Verifica se o arquivo do banco de dados existe
const dbExists = fs.existsSync(dbFilePath);

// Se o arquivo não existir, cria o banco de dados
if (!dbExists) {
    const db = new sqlite3.Database(dbFilePath);
    db.close();
    console.log(`Arquivo do banco de dados ${dbFilePath} criado.`);
}

// Agora podemos conectar ao banco de dados
const db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log(`Conectado ao banco de dados ${dbFilePath}.`);
});

// Exemplo de criação de tabela (se ela não existir)
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT UNIQUE
        )`, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Tabela de usuários criada ou já existente.');
});

// Exemplo de inserção de dados
db.run(`INSERT INTO usuarios (nome, email) VALUES ('João', 'joao@email.com')`, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Dados inseridos com sucesso.');
});

// Exemplo de seleção de dados
db.all(`SELECT * FROM usuarios`, (err, rows) => {
    if (err) {
        console.error(err.message);
    }
    rows.forEach((row) => {
        console.log(row.nome, row.email);
    });
});

// Fechar conexão com o banco de dados quando terminar de usar
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log(`Conexão com o banco de dados ${dbFilePath} fechada.`);
});
