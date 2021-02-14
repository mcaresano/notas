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
        },

        deleted_at: {
            type: dataTypes.STRING(1),
            notNull: true,
            default :1
        } 
    }

    let config = {
        tableName: 'notas',
        timestamps : true,
        underscored : true
    }

    const Note = sequelize.define(alias, cols, config)

    return Note

}