class Tabelas {
    init(conn){
        this.conn = conn;
        this.criarAtendimentos();
    }

    criarAtendimentos(){
        const qry = 'CREATE TABLE IF NOT EXISTS Atendimento (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))';

        this.conn.query(qry, (erro)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela criada com sucesso!');
            }
        });
    }
}

module.exports = new Tabelas;