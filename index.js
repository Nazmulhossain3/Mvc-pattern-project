// creating server 

const express = require("express")
const userRoutes = require('./routes/userRoute')
const productRoutes = require('./routes/productRoute')
const app = express()
const PORT = 5000


app.use(express.urlencoded({extended : true}))
app.use(userRoutes)
app.use(productRoutes)





app.get('/users', async(req,res)=> {

res.send('hellow express, I am tring to understand MVC pattern ')

})


app.listen(PORT, () => {
    console.log(`Server is running http://localhost ${PORT }`)
  })