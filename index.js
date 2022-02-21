const express = require('express'); //aller chercher la fonction express 
const app = express(); //instance

app.use(express.json()) //parcé en json
app.use(express.urlencoded({extended: true})) //encoder url

// obtenir à la racine (/) la réponse 'ok'
app.get('/', (request, response) => {
    response.json({reponse : 'ok'})
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.status(500).json({reponse : 'ok2'})
})

app.listen(8080, () => 'application écoute sur le port 8080')