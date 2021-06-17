const atendimento = require('../models/atendimentos');

module.exports = (app) => {
    app.get('/atendimentos', (request, response)=>response.send("testando GET"));
    app.post('/atendimentos', (request, response)=>{

        const att = request.body;
        atendimento.adiciona(att, response);
    }
        );
}