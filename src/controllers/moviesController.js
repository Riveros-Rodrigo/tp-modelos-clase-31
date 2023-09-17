const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        //findAll genera la consulta select * from movie
        db.Movie.findAll()
            .then((movies) =>{
                return res.render('moviesList',{
                    movies
                })
            })
            .catch((error)=> console.log(error))
    },
    new : (req,res) =>{
        return res.send('Lista de estreno')
    },
    recomended: (req,res) =>{
        return res.send('Lista de recomendados')
    },
    detail: (req,res) =>{
        return res.send('Lista de detalles')
    }
}