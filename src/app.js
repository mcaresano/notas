const express = require ('express');
const app = express ();
const path = require ('path');

let port = process.env.PORT || 3000;

const notesRouter = require ('./routers/notesRouter');

// ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname, '../public')))


app.use ('/',notesRouter);


app.listen (port, ()=> console.log("Servidor conectado en puerto " + port   ))