const {categoryOptions, sizeOptions} = require ('../models/product.js')

function getProductCards(products, url) {
  if (url.includes('/dashboard')) {
    let html = '';
    for (let product of products) {
      html += `
      
        <div class="product-card">
          <img src="${product.imagen}" alt="${product.nombre}">
          <h2>${product.nombre}</h2>
          <p>${product.descripcion}</p>
          <p>${product.talla}</p>
          <p>${product.precio}€</p>
          <a href="/dashboard/${product._id}">Ver detalle</a>
          <a href="/dashboard/${product._id}/edit">Editar</a>
          <form action="/dashboard/${product._id}?_method=DELETE/delete" method="POST"  enctype="application/x-www-form-urlencoded" id="formularioEliminarProducto">
          <button type="submit">Eliminar Producto</button>
          </form>
        </div>
      `;
    }
    return html;
  } else {
    let html = '';
     for (let product of products) {
      html += `
      
        <div class="product-card">
          <img src="${product.imagen}" alt="${product.nombre}">
          <h2>${product.nombre}</h2>
          <p>${product.descripcion}</p>
          <p>${product.talla}</p>
          <p>${product.precio}€</p>
          <a href="/products/${product._id}">Ver detalle</a>
        </div>
      `;
    }
    return html;
  } 
}

function getcategoryOptions() {
  let html = ''; 
  for (let category of categoryOptions) {
    html += `<option value="${category}">${category}</option>`;
  }
  return html;
}

function getSizeOptions() {
  let html = ''; 
  for (let size of sizeOptions) {
    html += `<option value="${size}">${size}</option>`;
  }
  return html;
}

const formularioNuevoProducto = `
  <form action="/dashboard" method="POST" id="formularioNuevoProducto">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <label for="descripcion">Descripción:</label>
    <input type="text" id="descripcion" name="descripcion" required>
    <label for="categoria">Categoría:</label>
    <select id="categoria" name="categoria" style="text-transform:lowercase" required>
      ${getcategoryOptions()}
    </select>
    <label for="talla">Talla:</label>
    <select id="talla" name="talla" required>
      ${getSizeOptions()}
    </select>
    <label for="precio">Precio:</label>
    <input type="number" step="0.01" id="precio" name="precio" required>
    <label for="imagen">Imagen:</label>
    <input type="text" id="imagen" name="imagen">
    <button type="submit">Crear Producto</button>
  </form>`

  const formularioEditar = (producto) => {
    return `
  <form action="/dashboard/${producto._id}?_method=PUT" method="POST"  enctype="application/x-www-form-urlencoded" id="formularioEditarProducto">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <label for="descripcion">Descripción:</label>
    <input type="text" id="descripcion" name="descripcion" required>
    <label for="categoria">Categoría:</label>
    <select id="categoria" name="categoria" style="text-transform:lowercase" required>
      ${getcategoryOptions()}
    </select>
    <label for="talla">Talla:</label>
    <select id="talla" name="talla" required>
      ${getSizeOptions()}
    </select>
    <label for="precio">Precio:</label>
    <input type="number" step="0.01" id="precio" name="precio" required>
    <label for="imagen">Imagen:</label>
    <input type="text" id="imagen" name="imagen">
    <button type="submit">Crear Producto</button>
  </form>`
  }
  
 
module.exports = {getProductCards, formularioNuevoProducto, formularioEditar}