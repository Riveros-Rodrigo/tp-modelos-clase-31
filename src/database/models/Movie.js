module.exports = (sequelize, DataTypes) => {

    const alias = "Movie";

    const cols = { 
        id : {
            type : DataTypes.INTEGER.UNSIGNED ,
            primaryKey : true,  // primary key
            allowNull : false,
            autoIncrement:true   //auto increment
        },
        title: {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date: {
            type :DataTypes.DATE,
            allowNull : false
        },
        length : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }

    const config = {
        tableName : "movies", //si la tabla esta en plural e ingles mejor, el modelo en singular Movie y la tabla en plural movies
        timestamps : true, // sequalize espera que tengas marca de tiempo, si no la tenes pones false. Si no  tira error
        // esto es para que sepan que la nomenclatura no esta como camelCase
        underscored : true
    }

    //retorna lo que define sequelize
    const Movie = sequelize.define(alias, cols, config);

    return Movie
}