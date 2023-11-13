const path = require('path')
const products = require('../models/productModel')

exports.getProduct = async(req,res)=> {
    res.sendFile(path.join(__dirname,  "/../views/product.html"))
}

exports.saveProducts = async(req,res)=> {
    const name = req.body.name
    const price = Number(req.body.price)

    const product = {
        name,
        price
    }

    products.push(product)
    res.send(products)
}
