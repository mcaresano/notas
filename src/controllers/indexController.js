const db = require('../database/models/index');

module.exports = {
    home: (req, res)=> {
       db.Note.findAll()
        .then  ((notas)=>{
           res.render ('index',{notas: notas})
        })
     
    }
}       