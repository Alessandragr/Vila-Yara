var express = require('express');
const SupermercadoController = require('../controllers/SupermercadoController');
var router = express.Router();

/* GET home page. */
router.get('/', SupermercadoController.index);
router.get('/login', SupermercadoController.login);
router.get('/cadastroUsuario', SupermercadoController.showCadastroUsuario);
router.post('/cadastroUsuario', SupermercadoController.criaCadastroUsuario);
router.get('/produtos', SupermercadoController.produtos);

module.exports = router;
