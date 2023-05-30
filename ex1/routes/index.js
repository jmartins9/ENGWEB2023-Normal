var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

// GET: os vários pedidos

router.get('/plantas', function(req, res) {
  const especie = req.query.especie;
  const implant = req.query.implant;

  Planta.list(especie, implant)
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(erro => {
      res.status(520).render('error', {error: erro, message: "Erro na obtenção na lista de plantas"})
    })
});



router.get('/plantas/freguesias', function(req, res) {
  Planta.freguesias()
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(erro => {
      res.status(521).render('error', {error: erro, message: "Erro na obtenção das freguesias"})
    })
});

router.get('/plantas/especies', function(req, res) {
  Planta.especies(req.params.id)
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(erro => {
      res.status(522).render('error', {error: erro, message: "Erro na obtenção das especies"})
    })
});


router.get('/plantas/:id', function(req, res) {
  Planta.getPlanta(req.params.id)
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(erro => {
      res.status(523).render('error', {error: erro, message: "Erro na obtenção da planta com id: " + req.params.id})
    })
});


// POST
router.post('/plantas', function(req, res) {
  Planta.addPlanta(req.body)
    .then(dados => {
      res.status(201).jsonp(dados)
    })  
    .catch(erro => {
      res.status(524).render('error', {error: erro, message: "Erro na inserção de uma planta"})
    })
})


// DELETE
router.delete('/plantas/:id', function(req, res) {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(erro => {
      res.status(525).render('error', {error: erro, message: "Erro na remoção de uma planta"})
    })
})


module.exports = router;
