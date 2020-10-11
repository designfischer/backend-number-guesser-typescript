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

interface responseData {
    won: Boolean,
    message: string
}
 
app.post('/number', (req, res) => {

    const guessedNumber: number = req.body.number
    const generatedNumber = generateRandomNumberFrom0To10()

    let responseData: responseData = {} as responseData

    if (guessedNumber === generatedNumber) {
        responseData = {
            won: true,
            message: `Você acertou! O número correto é ${generatedNumber}`
        }

    } else {
        responseData = {
            won: false,
            message: `Você errou! O número correto é ${generatedNumber}`
        }
    }

    res.status(200).json({ 
        status: 200,
        data: responseData
    })

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))