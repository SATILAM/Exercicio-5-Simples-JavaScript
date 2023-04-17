function contarVogais(str) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++;
    }
  }
  
  return contador;
}

console.log(contarVogais('javascript')); // Deve retornar 3