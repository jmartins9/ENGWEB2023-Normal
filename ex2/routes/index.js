var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/especies/:id', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas?especie='+req.params.id)
    .then(dados => {
      if (dados.data.length > 0) {
        n = dados.data[0]["Nome Científico"]
      }
      res.status(200).render('especie', { especie : req.params.id, nome: n , plist : dados.data , d: data})
    })
    .catch(erro => {
      res.status(520).render('error', {error: erro, message: "Erro na obtenção da lista de especies"})
    })
});


router.get('/:id', function(req, res){
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas/'+req.params.id)
    .then(dados => {
      res.status(200).render('planta', { p : dados.data , d: data})
    })
    .catch(erro => {
      res.status(521).render('error', {error: erro, message: "Erro na obtenção da planta " + req.params.id })
    })
})


router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas')
    .then(dados => {
      res.status(200).render('index', { plist : dados.data , d: data})
    })
    .catch(erro => {
      res.status(522).render('error', {error: erro, message: "Erro na obtenção da lista de plantas"})
    })
});




module.exports = router;
