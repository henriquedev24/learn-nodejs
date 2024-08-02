const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('dc', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
})

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco feita com sucesso!')
        return sequelize.query("SELECT * FROM dc.produtos")
    })
    .then(([results, metadata]) => {
        console.log('Resultados da consulta:', results)
    })
    