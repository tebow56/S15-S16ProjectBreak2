const express =  require ('express')
const router = express.Router()
const upload = require('../middlewares/uploadCloudinaryMiddleware.js');
const Product = require ('../models/product.js')
const productController = require ('../controllers/productController.js')



router.get ('/products', productController.showProducts)

router.get ('/products/:productid', productController.showProductById)

router.get ('/dashboard',productController.showProducts)

router.get ('/dashboard/new', productController.showNewProduct)

router.post ('/dashboard',productController.createProducts)

router.get ('/dashboard/:productid', productController.showProductById)

router.get ('/dashboard/:productid/edit', productController.showProductById)

router.put ('/dashboard/:productid', productController.updateProduct)

router.delete ('/dashboard/:productid/delete', productController.deleteProduct)

module.exports = router