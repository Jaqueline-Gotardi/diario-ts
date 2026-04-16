//Desafio
//Criar uma função genérica que recebe um array de qualquer tipo e exiba cada item no console

//**Objetivos do exercício**
//- Criar uma função genérica em TypeScript.
//- Definir um tipo genérico `<T>` que permita trabalhar com diferentes tipos de dados.
//- Iterar sobre os elementos de um array.
//- Exibir os itens no console.
//- Testar a função com arrays de números e strings.

//**Sugestões de implementação**
//- Use `<T>` na assinatura da função para declarar o tipo genérico.
//- Defina o parâmetro como `T[]`, garantindo que seja um array do tipo recebido.
//- Utilize o método `forEach` para percorrer os itens.
//- Faça duas chamadas de teste: uma com números e outra com strings.

function percorrerElemento <T>(item: T[]) {

    item.forEach(elemento => console.log(elemento))
}
percorrerElemento([1, 2, 3, 4, 5])
percorrerElemento(["Testando"])