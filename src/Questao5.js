const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;
function PedidosGerais(pedidosJSON) {
  const obj = JSON.parse(pedidosJSON);
  const Todospedidos = obj.pedidos;
  let entregues = 0;
  let Processando = 0;
  let valorTotal = 0;
  for (let i = 0; i < Todospedidos.length; i++) {
    const pedido = Todospedidos[i];
    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      Processando++;
    }
    valorTotal += pedido.total;
  }
  const valorFormatado = valorTotal.toFixed(2).replace(".", ",");
  const resumo = `${entregues} pedidos entregues, ${Processando} em processamento. Valor total: R$ ${valorFormatado}`;
  console.log(resumo);
  return resumo;
}
PedidosGerais(pedidosJSON);

