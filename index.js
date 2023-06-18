const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('home'))
  .get('/depoimentos', (req, res) => res.render('depo'))
  .get('/localizacao', (req, res) => res.render('location'))
  .get('/produtos', (req, res) => res.render('products'))
  .get('/feirantes', (req, res) => res.render('sellers'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
