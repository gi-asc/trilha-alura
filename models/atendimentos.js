const conn = require('../infra/connection');

class Atendimento{

    adiciona(atendimento){
        const qry = "INSERT INTO Atendimentos SET ?";

        conn.query(qry, atendimento, (erro, resultados)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultados);
            }
        })
    }
}

module.exports = new Atendimento;