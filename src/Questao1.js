const usuario = {
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["React", "JavaScript", "Node.js"],
  ativo: true
};
function convertUser(usuario) {
  const userJSON = JSON.stringify(usuario);
  const originUser= JSON.parse(userJSON);
  console.log("JSON:", userJSON);
  console.log("Return:", originUser);
  return originUser;
}
convertUser(usuario);

