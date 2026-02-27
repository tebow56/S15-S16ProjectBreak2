const {User} = require ('../models/user.js')
const {formularioLogin} = require ('../helpers/template.js')
const baseHTML = require ('../helpers/baseHTML.js')
const getNavBar = require ('../helpers/getNavBar.js')

const userController = {
    loginUser: async (req,res)=>{
        try {
            const {usuario, contraseña} = req.body
            const user = await User.findOne({usuario: usuario})
            if (!user) {
                res.status(404).json({message: "Usuario no encontrado"})
            } else if (user.password !== contraseña) {
                res.status(401).json({message: "Contraseña incorrecta"})
            } else {
                req.session.user = user
                req.session.isAuthenticated = true
                res.redirect('/dashboard')
                res.status(200).json({message: "Inicio de sesión exitoso"})
            }
        } catch (error) {
            console.error (error)
            res.status (500).json ({message: "Error al iniciar sesión"})
        }
    }, 
    showLoginForm: (req,res)=>{
        try {
            const html = baseHTML + getNavBar(req.originalUrl) + `<main>${formularioLogin}</main>`
            res.send(html)
        } catch (error) {
            console.error (error)
            res.status (500).send ({message: "Error al mostrar el formulario de inicio de sesión"})
        }
    },
    registerUser: async (req,res)=>{
        try {
            const userData = req.body
            const usuario = userData.usuario
            const password = userData.password

            const Usuarioexistente = await User.findOne({usuario: usuario})
            if (Usuarioexistente) {
                res.status(400).json({message: "El usuario ya existe"})
            } else {
                const newUser = new User({usuario, password})
                await newUser.save()
                res.status(201).json({message: "Usuario registrado exitosamente"})
            }
    }catch (error) {
        console.error (error)
        res.status (500).json ({message: "Error al registrar el usuario"})
    } 
    }
}  

module.exports = userController;