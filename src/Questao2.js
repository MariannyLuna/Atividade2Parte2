const jsonString = `{
  "usuarios": [
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"},
    {"nome": "Carlos", "email": "carlos@email.com"}
  ]
}`;
function pegarEmail(jsonString) {
  const obj = JSON.parse(jsonString);
  const listUser = obj.usuarios;
  let emails = [];
  for (let i = 0; i < listUser.length; i++) {
    emails.push(listUser[i].email);
  }
  const emailAgrupado = emails.join(", ");
  console.log(emailAgrupado);
  return emailAgrupado;
}
pegarEmail(jsonString);
