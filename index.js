const express = require('express'); //aller chercher la fonction express 
const app = express(); //instance

let bdd = [
    {name : 'Hamid', age : 42, email : 'hamid@gmail.com'},
    {name : 'Chris', age : 33, email : 'chris@gmail.com'},
    {name : 'Danny', age : 30, email : 'danny@gmail.com'}
]

app.use(express.json()) //parcé en json
app.use(express.urlencoded({extended: true})) //encoder url

// obtenir à la racine (/) la réponse 'ok'
app.get('/', (request, response) => {
    response.json(bdd)
})

app.post('/', (request, response) => {
    console.log(request.body)
    let newUser = {name : request.body.name, age : request.body.age, email : request.body.email}
    bdd.push(newUser) 
    response.status(201).json({reponse : 'New user created'})
})

app.put('/:name', (req, res) => {
    req.params.name
    console.log(req.params.name)
    bdd.map(item => {
        if (req.params.name === item.name) {
            item.name = req.body.name
            item.age = req.body.age
            item.email = req.body.email
        }
    })
    res.status(201).json({reponse : 'data update'})
})

app.delete('/:name', (req, res) => {
    req.params.name
    bdd = bdd.filter(item => item.name !== req.params.name)
    res.status(204).json({reponse : 'data is remove'})
})

app.listen(8080, () => 'application écoute sur le port 8080')