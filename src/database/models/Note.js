module.exports = (sequelize, dataTypes)=>{
    let alias = 'Note';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo:{
            type: dataTypes.STRING(255),
            notNull: true,
        },
        texto: {
            type: dataTypes.STRING(255),
            notNull: true,
        }
 
    }

    let config = {
        tableName: 'notas',
        timestamps : true,
        //paranoid : true,
        underscored : true,
       // deletedAt : "deleted_at"
    }

    const Note = sequelize.define(alias, cols, config)

    return Note

}