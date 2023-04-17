function contarVogais(str) {
    const vogais = 'aeiou';
    let contador = 0;
  
    for (let letra of str.toLowerCase()) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
  
    return contador;
  }
  
  console.log(contarVogais('javascript')); // Deve retornar 3