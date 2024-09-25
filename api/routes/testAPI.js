var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send("API working correctly");
});

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.post('/submit', (req, res) => {
    res.send('Formulário enviado com sucesso!');
});

router.put('/update/:id', (req, res) => {
    res.send(`Atualizando o item com ID: ${req.params.id}`);
});

router.delete('/delete/:id', (req, res) => {
    res.send(`Deletando o item com ID: ${req.params.id}`);
});

module.exports = router;