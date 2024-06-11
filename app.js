// Instalei o Nodemon. Rode no terminal: nodemon app
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res) {
    res.render("admin/form_add_noticia");
});

app.get('/noticia', function(req, res) {
    res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log("Servidor rodando com express!");
});