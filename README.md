# S15-S16ProjectBreak2
Tienda de ropa con catálogo de productos y dashboard para el administrador.

PASOS PARA INICIAR.

1. npm install
2. conectar base de datos con .env (MONGO_URI)
3. npm start.

ENDPOINTS:

productRoutes:
/products : rutas para ver el catalogo y filtrar por categorías pero sin poder modificar nada.
    /products ->  muestra todos los productos
    /products/:productid -> muestra el producto del id indicado
    /products/categoria/:categoria -> filtra por categorías

/dashboard : rutas para el administrador
    /dashboard -> muestra todos los productos con posiblidad de editar y eliminarlos.


apiRoutes:
/API : rutas para API con datos json:
    Get /API/products -> muestra todos los productos
    Get /API/products/:productid -> muestra el producto con el id indicado
    Post /API/products -> para crear un nuevo producto
    Put /API/products/:productid -> para editar un producto ya existente filtrandolo por ID
    Delete /API/products/:productid -> para eliminar el producto con el ID indicado.

authRoutes:
/login : para iniciar sesión
/registro : para registrar usuario 


RECURSOS:
-Express
-Mongoose
-Atlas
-Render
-dotenv
-express.urlencoded
-cloudinary
-method-override
