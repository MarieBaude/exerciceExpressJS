const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.json({reponse : 'ok'})
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.json({reponse : 'ok2'})
})

app.listen(8080, () => 'application écoute sur le port 8080')