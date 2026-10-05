function formatoMoneda(v){ return "$" + v.toFixed(2); }

// Valida los datos de un pedido antes de registrarlo
function validarPedido(pedido) {
  const errores = [];
  if (!pedido || typeof pedido !== "object") return ["Pedido inválido"];
  if (!pedido.cliente || pedido.cliente.trim() === "") errores.push("El cliente es obligatorio");
  if (!pedido.producto) errores.push("El producto es obligatorio");
  if (!Number.isInteger(pedido.cantidad) || pedido.cantidad <= 0) errores.push("La cantidad debe ser un entero mayor a 0");
  return errores;
}
