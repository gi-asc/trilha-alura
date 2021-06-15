const express = require('express');
const app = express();
app.listen(3000, () => console.log("Testando"));

app.get('/atendimentos', (request, response)=>response.send("testando alteração"));