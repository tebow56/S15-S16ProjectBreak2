const mongoose = require ('mongoose')

const categoryOptions = ['camisetas','pantalones','zapatos','accesorios']
const sizeOptions = ['XS','S','M','L','XL']

const ProductSchema = new mongoose.Schema ({
    nombre: String,
    descripcion: String,
    imagen: String,
    categoria: {type:String, enum: categoryOptions, lowercase: true, required:true},
    talla : {type:String, enum:sizeOptions, uppercase: true, required:true},
    precio: Number,
},{timestamps:true})

const Product = mongoose.model('Product', ProductSchema);

module.exports= {Product, categoryOptions, sizeOptions}