const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "adminadmin",
    host: "127.0.0.1",
    port: 5432,
    database: "teste"
})

getClientes()

async function getClientes(){
    try{
    console.log("Iniciando a conexão com o Banco de Dados.")
    await cliente.connect()
    console.log("Conexão efetuada com sucesso!")
    const resultado = await cliente.query("select * from clientes")
    console.table(resultado.rows)    
}
catch(e){
console.log("Ocorreu um erro na conexão com o Banco de Dados, erro: "+ e)
}
finally{
    await cliente.end()
    console.log("Desconectado do Banco de Dados")
}}
