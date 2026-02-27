const getNavBar = (url) => {
    if (url.includes('/dashboard')) { 
    return ` 
    <header>
      <nav>
        <ul id="listado">
            <li><a id="productos" href="/dashboard">Productos</a></li>
            <li><a id="camisetas" href="/dashboard/categoria/camisetas">Camisetas</a></li>
            <li><a id="pantalones" href="/dashboard/categoria/pantalones">Pantalones</a></li>
            <li><a id="zapatos" href="/dashboard/categoria/zapatos">Zapatos</a></li>
            <li><a id="accesorios" href="/dashboard/categoria/accesorios">Accesorios</a></li>
            <li><a id="nuevoProducto" href="/dashboard/new">Subir Nuevo producto</a></li>
        </ul>
      </nav>
    </header> `
    } else  { return `<header>
      <nav>
        <ul id="listado">
            <li><a id="productos" href="/products">Productos</a></li>
            <li><a id="camisetas" href="/products/categoria/camisetas">Camisetas</a></li>
            <li><a id="pantalones" href="/products/categoria/pantalones">Pantalones</a></li>
            <li><a id="zapatos" href="/products/categoria/zapatos">Zapatos</a></li>
            <li><a id="accesorios" href="/products/categoria/accesorios">Accesorios</a></li>
            <li><a id="login" href="">Login</a></li>
        </ul>
      </nav>
  </header>`

}
}
module.exports = getNavBar