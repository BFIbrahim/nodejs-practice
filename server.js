const express = require("express")


const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
    res.json({
        success: true,
        users: ["Ibrahim", "Rahim", "Karim"]
    })
})
app.post('/users', (req,  res) => {
    const newUser = req.body

    res.status(201).json({
        success: true,
        message: 'User created successfull',
        user: newUser
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})