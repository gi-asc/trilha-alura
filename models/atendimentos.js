const { response } = require('express');
const moment = require('moment');
const conn = require('../infra/connection');

class Atendimento{
        adiciona(atendimento, res) {
            const dataCriacao = new Date();
            const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

            const validarData = moment(data).isSameOrAfter(dataCriacao);
            const validarCliente = atendimento.cliente.length > 4;

            const validate = [
                {
                    nome: 'data',
                    msg: 'A data deve ser maior ou igual a data atual',
                    verify: validarData
                },
                {
                    nome: 'cliente',
                    msg: 'Por favor, insira um nome válido.',
                    verify: validarCliente
                }
            ]

            let error = null;

            validate.forEach((item)=>{
                if(!item.verify){
                    error = item.msg;
                    console.log(item.msg);
                    
                }
                return error;
            })

            if(error!=null&&error!=undefined&&error!=""){
                res.status(400).json(error)
                return;
            }

            const atendimentoDatado = {...atendimento, dataCriacao, data};
            const sql = 'INSERT INTO Atendimento SET ?'
    
            conn.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                   res.status(200).json(resultados)
                }
            })
        }
        lista(res) {
            const sql = 'SELECT * FROM Atendimento'
    
            conn.query(sql, (erro, resultados) => { 
                if(erro) {
                    res.status(400).json(erro)
                } else { 
                    res.status(200).json(resultados)
            }
    })}
}

module.exports = new Atendimento;