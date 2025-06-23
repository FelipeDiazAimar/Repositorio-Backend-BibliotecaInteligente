const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

// Obtener todas las salas
router.get('/', salaController.getAll);

// Obtener una sala por id
router.get('/:id', salaController.getById);

// Crear una nueva sala
router.post('/', salaController.create);

// Eliminar una sala por id
router.delete('/:id', salaController.delete);

module.exports = router;
