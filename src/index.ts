import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3333
const app = express()

app.use(cors())
app.use(express.json())

function generateRandomNumberFrom0To10() {
    const generatedNumber = Math.floor(Math.random() * 11)
    return generatedNumber
}  
 
app.post('/number', (req, res) => {

    const guessedNumber: number = req.body.number
    const generatedNumber = generateRandomNumberFrom0To10()

    let returnMessage: string = ''

    if (guessedNumber === generatedNumber) {
        returnMessage = `Você acertou! O número correto é ${generatedNumber}`
    } else {
        returnMessage = `Você errou! O número correto era ${generatedNumber}`
    }

    res.status(200).json({ message: returnMessage })

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))