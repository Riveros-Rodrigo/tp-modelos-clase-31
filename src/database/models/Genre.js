module.exports = (sequelize, DataTypes) => {

    const alias = "Genre";

    const cols = { 
        id : {
            type : DataTypes.INTEGER.UNSIGNED ,
            primaryKey : true,  // primary key
            allowNull : false,
            autoIncrement:true   //auto increment
        },
        name: {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        }
    }

    const config = {
        tableName : "genres", //si la tabla esta en plural e ingles mejor, el modelo en singular Movie y la tabla en plural movies
        timestamps : true, // sequalize espera que tengas marca de tiempo, si no la tenes pones false. Si no  tira error
        // esto es para que sepan que la nomenclatura no esta como camelCase
        underscored : true
    }

    //retorna lo que define sequelize
    const Genre = sequelize.define(alias, cols, config);

    return Genre
}