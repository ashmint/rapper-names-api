const { request } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age' : 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age' : 29,
        'birthName': 'chancelor Bennet',
        'birthLocation': 'Chicago, US'
    },
    'dylan': {
        'age' : 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) =>{
    let rapperName = request.params.rapperName.toLocaleLowerCase();
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }
    else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}!`)
})