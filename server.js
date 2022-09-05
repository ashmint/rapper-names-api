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
    'unknown': {
        'age' : 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },
    'eminem': {
        'age' : 49,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': ' Saint Joseph, Missouri, United States'
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
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}!`)
})