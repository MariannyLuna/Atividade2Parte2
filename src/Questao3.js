const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;
function acimadopreco(produtosJSON) {
  const obj = JSON.parse(produtosJSON);
  const produtlist = obj.produtos;
  let name = [];
  for (let i = 0; i < produtlist.length; i++) {
    if (produtlist[i].preco > 50) {
      name.push(produtlist[i].nome);
    }
  }
  console.log(name);
  return name;
}
acimadopreco(produtosJSON);
