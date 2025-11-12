function parseJSONSafe(jsonString) {
  try {
    const retorno = JSON.parse(jsonString);
    return retorno;
  } catch (erro) {
    console.log("JSON inválido");
    return null;
  }
}
const errojson = '{nome: "João", "idade": 30}'; 
console.log(parseJSONSafe(errojson)); 
