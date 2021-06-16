module.exports = (app) => {
    app.get('/atendimentos', (request, response)=>response.send("testando GET"));
    app.post('/atendimentos', (request, response)=>response.send("testando POST"));
}