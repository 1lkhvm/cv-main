const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const port = 3030
app.use(express.json())
app.use(cors())



const CardSchema = new mongoose.Schema({
    tecrubeleri: String,
    baslangictarixi: String,
    bitistarixi: String,

});
const Card = mongoose.model("Tecrube", CardSchema)





//////GET
app.get('/', async (req, res) => {

    let card = await Card.find({})
    res.json(card)
})




//////GETBYID
app.get('/:id', async (req, res) => {

    const { id } = req.params
    let card = await Card.findById(id)
    res.json(card)
})




//////POST
app.post('/', (req, res) => {


    const newcard = Card({
        tecrubeleri: req.body.tecrubeleri,
        baslangictarixi: req.body.baslangictarixi,
        bitistarixi: req.body.bitistarixi,
    });
    newcard.save()
    res.send(newcard)
})



//////GET DELETE
app.get('/:id', async (req, res) => {

    const { id } = req.params
    let card = await Card.findByIdAndDelete(id)
    res.json(card)
})

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://tehsil:tehsil1234@cluster0.1hqdf0d.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Emeliyyat ugurla tamamlandi!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})