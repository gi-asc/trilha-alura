const atendimento = require('../models/atendimentos');

module.exports = (app) => {
    app.get('/atendimentos', (request, response)=>atendimento.lista(response));
    app.post('/atendimentos', (request, response)=>{

        const att = request.body;
        atendimento.adiciona(att, response);
    }
        );
}