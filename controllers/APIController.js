const {Product} = require ('../models/product.js')




const productController = {
    showProducts: async (req,res)=>{
        try {
            const productos= await Product.find({})
            res.json(productos)
    
        } catch (error){
            console.error (error)
            res.status (500).json ({message: "No se encuentran los productos"})
        }
    },
    showProductById: async (req,res)=>{
        try {
            const productoBuscado = await Product.findById(req.params.productid)
            res.json(productoBuscado)
            
        }catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se encuentran el producto"})
        }
    },
    showNewProduct: async (req,res)=>{
        try {
            const productos= await Product.find({})
            res.json(productos)
        } catch (error){
            console.error (error)
            res.status (500).json ({message: "No se encuentran los productos"})
        }
    },
    createProducts: async (req,res)=> {
        try {
            const nuevoproducto = await Product.create ({...req.body})
            res.status(201).json({message: `El producto se ha creado correctamente ${nuevoproducto}`})
        } catch (error){
            console.error (error)
            res.status (500).json ({message: "No se ha podido crear el producto"})
        }
    },    
    showEditProduct: async (req,res)=>{
        try {
            const productoBuscado = await Product.findById(req.params.productid)
            res.json(productoBuscado)   
        } catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se encuentra el producto"})
        }
    },  
    updateProduct: async (req,res)=>{
        try {
            const productoBuscado = await Product.findByIdAndUpdate(req.params.productid, req.body, { new: true })
            res.status(201).json({message: `El producto se ha actualizado correctamente: ${productoBuscado}`}) 
        } catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se pudo actualizar el producto"})
        }
    }, 
    deleteProduct: async (req,res)=>{
        try {
            const productoBuscado = await Product.findByIdAndDelete(req.params.productid)
            res.status(201).json({message: `El producto se ha eliminado correctamente: ${productoBuscado}`})  
        } catch (error) {
            console.error (error)
            res.status (500).json ({message: "No se pudo eliminar el producto"})
        }
    },
}

module.exports = productController
