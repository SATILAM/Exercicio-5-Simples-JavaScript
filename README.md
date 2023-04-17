# Exercicio-5-Simples-JavaScript

Dois exemplos de Funções que retorna o número de vogais presentes em uma String.

EXEMPLO 1:

A função contarVogais recebe uma string como parâmetro e declara um array vogais contendo as vogais. 

Em seguida, é definido um contador com valor inicial 0.

O loop for percorre cada caractere da string str, verificando se a vogal está presente no array vogais utilizando o método includes(). 

Caso esteja presente, o contador é incrementado em 1.

A função retorna o valor do contador que representa o número de vogais na string.

O resultado da função contarVogais('javascript'), que deve retornar 3, uma vez que existem três vogais na palavra 'javascript': a, i e a (na segunda sílaba).

.........................##................................

EXEMPLO 2:

Nesta implementação, o array vogais é definido como uma string contendo as vogais em ordem. Em seguida, é definido um contador com valor inicial 0.

O loop for...of percorre cada letra da string str, convertida para minúsculo com o método toLowerCase(). 

Para cada letra, verifica-se se ela está presente na string vogais utilizando o método includes(). Caso esteja presente, o contador é incrementado em 1.

A função retorna o valor do contador que representa o número de vogais na string.

O resultado da função contarVogais('javascript') é igual a 3, como no exemplo anterior.
