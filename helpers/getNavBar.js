const getNavBar = (url) => {
    if (url.includes('/dashboard')) { 
    return ` 
    <header>
      <nav>
        <ul id="listado">
            <li><a id="productos" href="/dashboard">Productos</a></li>
            <li><a id="camisetas" href="">Camisetas</a></li>
            <li><a id="pantalones" href="">Pantalones</a></li>
            <li><a id="zapatos" href="">Zapatos</a></li>
            <li><a id="accesorios" href="">Accesorios</a></li>
            <li><a id="nuevoProducto" href="/dashboard/new">Subir Nuevo producto</a></li>
        </ul>
      </nav>
    </header> `
    } else  { return `<header>
      <nav>
        <ul id="listado">
            <li><a id="productos" href="">Productos</a></li>
            <li><a id="camisetas" href="">Camisetas</a></li>
            <li><a id="pantalones" href="">Pantalones</a></li>
            <li><a id="zapatos" href="">Zapatos</a></li>
            <li><a id="accesorios" href="">Accesorios</a></li>
            <li><a id="login" href="">Login</a></li>
        </ul>
      </nav>
  </header>`

}
}
module.exports = getNavBar