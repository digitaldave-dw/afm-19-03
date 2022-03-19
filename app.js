const dataFromFunctionJs = require("./functions");
const express = require(`express`);
const path = require(`path`);
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));

app.get('/', function(req, res){
    res.render('index', {
        pageTitle: "Zajecia AFM 19.03.2022",
        example: dataFromFunctionJs.sayHello
    });
})

app.get('/about', function(req, res){
    res.render('about', {
        aboutPage: "About Us",
        info: "Where to find us",
        contact: "Contact us"
    });
})


app.listen(port, (err) => {
    if (err){ return console.log(`Wystąpił błąd ${err.message}`);}
    return console.log(`Apka działa na porcie ${port}`);
});