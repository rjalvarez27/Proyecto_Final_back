const express = require('express');
const router = express.Router();
const {createfollows, getfollows, followDeletSeguidos, followDeletSeguidores} = require('../controllers/follows');

//localhost:3000/api/follows
//Metodos:
router.post('/', createfollows)
router.get('/:id', getfollows)
router.delete('/:id_followed', followDeletSeguidos)
router.delete('/:id_followers', followDeletSeguidores)

module.exports = router