const express = require('express');
const app = express();

app.use(
    express.urlencoded({extended: true})
)

app.use(express.json())

// rotas
app.post('/createproduct', (req,res) => {
    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message: "O campo name é obrigatório!"})
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: `O produto ${name} foi criado com sucesso, pelo preço de ${price} zł`})
})

app.get('/', (req, res) => {
    res.status(200).json({message: 'Pierwsza Stworzona Trasa!'})
})

app.listen(3000)