const mongoose = require ('mongoose')

const categoryOptions = [`Camisetas`,'Pantalones','Zapatos','Accesorios']
const sizeOptions = ['XS','S','M','L','XL']

const ProductSchema = new mongoose.Schema ({
    nombre: String,
    descripcion: String,
    imagen: String,
    categoria: {type:String, enum: categoryOptions, required:true},
    talla : {type:String, enum:sizeOptions, required:true},
    precio: Number,
},{timestamps:true})

const Product = mongoose.model('Product', ProductSchema);

module.exports= Product