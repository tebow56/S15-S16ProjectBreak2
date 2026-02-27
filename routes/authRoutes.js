const express =  require ('express')
const router = express.Router();
const User = require ('../models/user.js')
const userController = require ('../controllers/authController.js')

router.get('/login', userController.showLoginForm)
router.post ('/login',userController.loginUser)

router.post('/registro', userController.registerUser)


module.exports = router;
