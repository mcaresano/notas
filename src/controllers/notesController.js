const db = require ('../database/models/index');


module.exports = {
    home: (req, res)=> {
        db.Note.findAll()
         .then  ((notas)=>{
            res.render ('index',{notas: notas})
         })
      
     },
    
    save: (req, res)=>{
        db.Note.create({
            titulo: req.body.titulo,
            texto: req.body.texto
        })
        .then (()=> res.redirect('/'))
    },

    edit: (req, res)=>{
        db.Note.findByPk(req.params.id)
        .then((nota) => {
          res.render ('detail', {nota:nota});    
        })
    },

    update :(req, res)=> {
        db.Note.update({
            titulo :req.body.titulo,
            texto : req.body.texto
        }, {where: {id: req.params.id}})
        .then (()=> res.redirect('/'))  
    },

    delete: (req, res)=> {
        db.Note.destroy({
            where: {id: req.params.id}})
        .then (()=> res.redirect('/')) 
    },
  }