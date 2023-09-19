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
    detail: (req,res) =>{
        const {id} = req.params;
        db.Movie.findByPk(id) //findByPk trae por la clave primaria
            .then(movie => { //promesa que devuelve una pelicula
                return res.render('moviesDetail',{
                    movie
                })
            })
            .catch(error => console.log(error))
    },
    new : (req,res) =>{
        db.Movie.findAll({ //el findAll siempre devuelve un array
            order : [ //aca le doy la consulta del order by en lista descendiente
                ['release_date','DESC']
            ]
        })
        .then((movies) =>{
            return res.render('newestMovies',{
                movies
            })
        })
        .catch((error)=> console.log(error))
    },
    recomended: (req,res) =>{
        db.Movie.findAll({ 
            limit : 5, //la consulta se genera bien pero aca no importa ponerlo en orden
            order : [
                ['rating', 'DESC']
            ]
        })
        .then((movies) =>{
            return res.render('recommendedMovies',{
                movies
            })
        })
        .catch((error)=> console.log(error))
    },
}