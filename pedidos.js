// NovaSoft - Lógica de pedidos

const PRECIOS = { Teclado: 25.0, Mouse: 12.5, Monitor: 180.0 };

function crearPedido(cliente, producto, cantidad, precio) {
  return { cliente, producto, cantidad: Number(cantidad), precio: Number(precio) };
}

function calcularTotal(items) {
  if (!Array.isArray(items) || items.length === 0) return 0;
  let total = 0;
  for (const item of items) {
    total += item.precio * item.cantidad;
  }
  return Math.round(total * 100) / 100;
}

if (typeof document !== "undefined") {
  const pedidos = [];
  document.getElementById("form-pedido").addEventListener("submit", function (e) {
    e.preventDefault();
    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    pedidos.push(crearPedido(cliente, producto, cantidad, PRECIOS[producto]));
    document.getElementById("resultado").textContent =
      "Pedidos: " + pedidos.length + " | Total: " + formatoMoneda(calcularTotal(pedidos));
  });
}
