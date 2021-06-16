const customExpress = require("./config/customExpress");
const connection = require('./infra/connection');
const tabelas = require('./infra/tabelas');

connection.connect((erro)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log('deu certo');
        tabelas.init(connection);
        const app = customExpress();

app.listen(3000, () => console.log("Testando"));
    }
});