const express = require('express');
const bodyParser = require('body-parser');
const cards = require('./packet.json');

const app = express();
app.use(bodyParser.json());

// Rota para retornar o editor de artigo
app.get('/', (req, res) => {
    res.send('Kanban');
});

// Rota para retornar as informações do artigo
app.get('/api/getCards', (req, res) => {
    const id = req.query.id;
    const card = cards.find(card => card.id === id);
    if (card) {
        res.json(card);
        res.send('Editor de artigo2');
    } else {
        res.status(404).send('Artigo não foi encontrado');
    }
});

// Rota para receber as alterações no artigo
app.put('/api/updatecard', (req, res) => {
    const id = req.query.id;
    const card = cards.find(card => card.id === id);
    if (card) {
        card.title = req.body.title || card.title;
        card.content = req.body.content || card.content;
        res.json(card);
    } else {
        res.status(404).send('Cards não foi encontrado');
    }
});

// Iniciar o servidor na porta 3000
app.listen(3333, () => {
    console.log('Servidor rodando na porta 3000');
});