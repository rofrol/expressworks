var express = require('express')
var path = require('path')
var jade = require('jade')
var app = express()
app.set('views', path.join(__dirname, 'templates'))
app.use(express.urlencoded())

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.set('view engine', 'jade')
  app.get('/home', function(req, res) {
    res.render(process.argv[3], {date: new Date().toDateString()})
  })
  app.get('/form', function(req, res) {
    res.render('form')
  })
  app.post('/form', function(req, res) {
    res.render('form2', {str: req.body.str.split('').reverse().join('')})
  })
app.listen(app.listen(process.argv[2]))
