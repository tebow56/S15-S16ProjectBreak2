const express =  require ('express')
const router = express.Router();
const Product = require ('../models/product.js')
const controller = require ('../controllers/APIController.js')

router.get ('/products',controller.showProducts)

router.get ('/products/:productid',controller.showProductById)

router.post ('/products',controller.createProducts)

router.put ('/products/:productid',controller.updateProduct)

router.delete ('/products/:productid',controller.deleteProduct)

module.exports = router