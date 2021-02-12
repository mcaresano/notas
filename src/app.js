const express = require ('express');
const app = express ();
const path = require ('path');

const indexRouter = require ('./routers/indexRouter');


// ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname, '../public')))


app.use ('/', indexRouter);

app.listen (3000, ()=> {console.log("Servidor conectado en puerto 3000");})