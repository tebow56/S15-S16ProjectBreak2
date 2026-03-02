const express =  require ('express')
const router = express.Router();
const Product = require ('../models/product.js')
const productController = require ('../controllers/productController.js')
const {loginMiddleware} = require ('../middlewares/authMiddleware.js')




router.get ('/', productController.showProducts)

router.get ('/producto/:productid', productController.showProductById)

router.get ('/categoria/:categoria', productController.showProductsByCategory)

router.get ('/dashboard/categoria/:categoria', productController.showProductsByCategory)

router.get ('/dashboard', loginMiddleware, productController.showProducts)

router.get ('/dashboard/new', loginMiddleware, productController.showNewProduct)

router.post ('/dashboard', loginMiddleware, productController.createProducts)

router.get ('/dashboard/:productid', productController.showProductById)

router.get ('/dashboard/:productid/edit', loginMiddleware, productController.showEditProduct)

router.put ('/dashboard/:productid', productController.updateProduct)

router.delete ('/dashboard/:productid', loginMiddleware, productController.deleteProduct)

module.exports = router