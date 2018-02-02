const cfg = require('./knexfile')
const knex = require('knex')(cfg.development)
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded())

app.get('/listcontatos', (req, res) => {
  knex('contato').select().then(contatos => {
    res.send(JSON.stringify(contatos))
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.get('/listprodutos', (req, res) => {
  knex('produto').select().then(produtos => {
    res.send(JSON.stringify(produtos))
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.post('/addcontato', (req, res) => {
  knex('contato').insert(req.body, 'idcontato').then(contato => {
    res.send(contato)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.post('/addproduto', (req, res) => {
  knex('produto').insert(req.body, 'idproduto').then(produto => {
    res.send(produto)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

knex.migrate.latest().then(() => {
  app.listen(3000, () => {
    console.log('Server is running...')
  })
})