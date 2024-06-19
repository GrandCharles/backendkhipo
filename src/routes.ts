import { Router, Request, Response } from 'express';

import { ManterUsuarioController } from './controllers/usuario/ManterUsuarioController';
import { middleAutenticacao } from './middlewares/middleAutenticacao';

import { ManterTipoEventoController } from './controllers/tipoEvento/ManterTipoEventoController';
import { ManterTipoLocalController } from './controllers/tipoLocal/ManterTipoLocalController';
import { ManterLocalController } from './controllers/local/ManterLocalController';
import { ManterEventoController } from './controllers/evento/ManterEventoController';

const router = Router();

// Usuario
router.post('/criarUser', new ManterUsuarioController().handleCriar);
router.post('/logarUser', new ManterUsuarioController().handleLogar);
// Middleware de autenticação
router.get('/authUser', middleAutenticacao, new ManterUsuarioController().handleAuth);
router.get('/listarUser', middleAutenticacao, new ManterUsuarioController().handleListar);

// Tipos de Locais
router.post('/criarTipoLocal', middleAutenticacao, new ManterTipoLocalController().handleCriar);
router.put('/alterarTipoLocal', middleAutenticacao, new ManterTipoLocalController().handleAlterar);
router.delete('/excluirTipoLocal', middleAutenticacao, new ManterTipoLocalController().handleExcluir);
router.get('/listarTipoLocal', middleAutenticacao, new ManterTipoLocalController().handleListar);


// Tipos de Eventos
router.post('/criarTipoEvento', middleAutenticacao, new ManterTipoEventoController().handleCriar);
router.put('/alterarTipoEvento', middleAutenticacao, new ManterTipoEventoController().handleAlterar);
router.delete('/excluirTipoEvento', middleAutenticacao, new ManterTipoEventoController().handleExcluir);
router.get('/listarTipoEvento', middleAutenticacao, new ManterTipoEventoController().handleListar);

// Locais
router.post('/criarLocal', middleAutenticacao, new ManterLocalController().handleCriar);
router.put('/alterarLocal', middleAutenticacao, new ManterLocalController().handleAlterar);
router.delete('/excluirLocal', middleAutenticacao, new ManterLocalController().handleExcluir);
router.get('/listarLocal', middleAutenticacao, new ManterLocalController().handleListar);

// Eventos
router.post('/criarEvento', middleAutenticacao, new ManterEventoController().handleCriar);
router.put('/alterarEvento', middleAutenticacao, new ManterEventoController().handleAlterar);
router.delete('/excluirEvento', middleAutenticacao, new ManterEventoController().handleExcluir);
router.get('/listarEvento', middleAutenticacao, new ManterEventoController().handleListar);

export { router };

