const express = require('express');
const contatosController = require('./controller/contatosController');
const cm = require('./middlewares/contatoMiddleware');

const router = express.Router();

// getAll - Listar todos os contatos
router.get('/contatos', contatosController.getAll);

// getOne - Apenas uma contato
// /contatos/4
router.get('/contatos/:id', contatosController.getOne);

// post - Inserir um contato
router.post('/contatos', cm.validacao, contatosController.contatoAdd);

// put - Editar um contato
// /contatos/4
router.put('/contatos/:id', cm.validacao, contatosController.contatoUpdate);

// delete - Excluir um contato
// /contato/4
router.delete('/contatos/:id', contatosController.contatoDelete);

module.exports = router;
