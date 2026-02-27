const {Product, categoryOptions, sizeOptions} = require ('../models/product.js')
const {getProductCards, formularioNuevoProducto, formularioEditar} = require ('../helpers/template.js')
const baseHTML = require ('../helpers/baseHTML.js')
const getNavBar = require ('../helpers/getNavBar.js')


const productController = {
    showProducts: async (req,res)=>{
        try {
            const productos= await Product.find({})
            const cards = getProductCards(productos,req.originalUrl)
            const NavBar = getNavBar(req.originalUrl)
            const html = baseHTML + NavBar + `<main>${cards}</main>`
            res.send(html)

        } catch (error){
            console.error (error)
            res.status (500).json ({message: "No se encuentran los productos"})
        }
    },
    showProductById: async (req,res)=>{
        try {
            let url = req.originalUrl
            const array = []
            const productoBuscado = await Product.findById(req.params.productid)
            array.push(productoBuscado)
            const cards = getProductCards(array,req.originalUrl)
            const NavBar = getNavBar(url)
            if (!productoBuscado) {
                res.send({message: "No hay ningún producto con ese id"})
            }else{
                const html = baseHTML + NavBar + `<main>${cards}</main>`
                res.send(html)
            }
        } catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se encuentran el producto"})
        }
    },
    showProductsByCategory: async (req,res)=>{
        try {
            const filtrados= await Product.find({"categoria": `${req.params.categoria}`})
            const cards = getProductCards(filtrados,req.originalUrl)
            const NavBar = getNavBar(req.originalUrl)
            const html = baseHTML + NavBar + `<main>${cards}</main>`
            res.send(html)
        } catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se encuentran los productos"})
        }
    },
    showNewProduct: async (req,res)=>{
        try {
            const NavBar = getNavBar(req.originalUrl)
            const html = baseHTML + NavBar + `<main>${formularioNuevoProducto}</main>`
            res.send(html)
        } catch (error){
            console.error (error)
            res.status (500).json ({message: "No se encuentran los productos"})
        }
    },
    createProducts: async (req,res)=> {
        try {
            
            await Product.create ({...req.body})
            const ultimoProducto = await Product.findOne().sort({ createdAt: -1 })

            res.redirect(`/dashboard/${ultimoProducto._id}`)
        } catch (error){
            console.error (error)
            res.status (500).json ({message: "No se ha podido crear el producto"})
        }
    },    
    showEditProduct: async (req,res)=>{
        try {
            const NavBar = getNavBar(req.originalUrl)
            const producto = await Product.findById(req.params.productid)
            const html = baseHTML + NavBar + `<main>${formularioEditar(producto)}</main>`
            res.send(html)
        } catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se encuentra el producto"})
        }
    },  
    updateProduct: async (req,res)=>{
        try {
            const productoBuscado = await Product.findById(req.params.productid)
            if (!productoBuscado) {
                res.send({message: "No hay ningún producto con ese id"})
            } else {
            await Product.findByIdAndUpdate(productoBuscado._id, { $set: req.body }, { returnDocument: 'after'})
            res.redirect(`/dashboard/${productoBuscado._id}`) 
        }} catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se pudo actualizar el producto"})
        }
    }, 
    deleteProduct: async (req,res)=>{
        try {
            const productoBuscado = await Product.findById(req.params.productid)
            if (!productoBuscado) {
                res.send({message: "No hay ningún producto con ese id"})
            } else {
            await Product.findByIdAndDelete(productoBuscado._id)
            res.redirect(`/dashboard`) 
            }
        }catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se pudo eliminar el producto"})
        }
    },
}


module.exports = productController