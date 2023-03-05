function idrandomInt(max) {
  return Math.floor(Math.random() * max);
}

// const agregar = document.getElementById("agregar")
// agregar.addEventListener('click', agregarFila)

function agregarFila() {
  //Obtención de valores de los inputs

  const inputCodigo = document.getElementById("inpCodigo").value;
  const inputNom = document.getElementById("inputNom").value;
  const inputAnaquel = document.getElementById("inputAnaquel").value;
  const inputCantidad = document.getElementById("inputCantidad").value;

  let stock = [];

  const productos = {
    Id: idrandomInt(200),
    Codigo: inputCodigo,
    Producto: inputNom,
    Anaquel: inputAnaquel,
    Cantidad: inputCantidad,
  };

  const agregarProductos = (id) => {
    const productoEnStock = stock.find((productos) => productos.id == id);
    stock.push(productoEnStock);
  };

  const tabla = document
    .getElementById("mostrarDatos")
    .getElementsByTagName("tbody")[0];
  //Creación de filas
  const fila = tabla.insertRow();

  //Creación de Celdas

  const num = fila.insertCell(0);
  const codigo = fila.insertCell(1);
  const nombre = fila.insertCell(2);
  const anaquel = fila.insertCell(3);
  const cantidad = fila.insertCell(4);

  num.innerHTML = productos.Id;
  codigo.innerHTML = productos.Codigo;
  nombre.innerHTML = productos.Producto;
  anaquel.innerHTML = productos.Anaquel;
  cantidad.innerHTML = productos.Cantidad;

  //Limpiar inputs

  document.getElementById("inpCodigo").value = "";
  document.getElementById("inputNom").value = "";
  document.getElementById("inputAnaquel").value = "";
  document.getElementById("inputCantidad").value = "";
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  agregarFila();
});

// const verStock = (stock) => {
//   const mostrarStock = document.getElementById("stockProduct").getElementsByTagName("tbody")[0];
// //   mostrarStock.innerHTML = "";

// //   stock.forEach((productos) => {
// // mostrarStock = document.cre

// //Creación de filas
// const filaStock = tabla.insertRow();
//   //Creación de Celdas
//   const nombreStock = filaStock.insertCell(0);
//   const anaquelStock = fila.insertCell(1);
//   const cantidadStock = fila.insertCell(2);

// };
