const express =  require ('express')
const router = express.Router();
const Product = require ('../models/product.js')
const productController = require ('../controllers/productController.js')



router.get ('/', productController.showProducts)

router.get ('/producto/:productid', productController.showProductById)

router.get ('/categoria/:categoria', productController.showProductsByCategory)

router.get ('/dashboard/categoria/:categoria', productController.showProductsByCategory)

router.get ('/dashboard',productController.showProducts)

router.get ('/dashboard/new', productController.showNewProduct)

router.post ('/dashboard',productController.createProducts)

router.get ('/dashboard/:productid', productController.showProductById)

router.get ('/dashboard/:productid/edit', productController.showEditProduct)

router.put ('/dashboard/:productid', productController.updateProduct)

router.delete ('/dashboard/:productid', productController.deleteProduct)

module.exports = router