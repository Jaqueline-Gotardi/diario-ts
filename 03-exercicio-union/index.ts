
/* Neste exercício, você vai praticar o uso de **Union Types** em **TypeScript**, que permitem que uma variável possa assumir mais de um tipo. O desafio consiste em criar uma variável que aceite tanto números quanto strings, atribuindo valores diferentes em momentos distintos e exibindo-os no console.

### **Objetivos do exercício**

- Declarar uma variável com Union Types em TypeScript.
- Permitir que a variável aceite valores do tipo `number` e `string`.
- Atribuir valores diferentes em momentos distintos.
- Exibir os valores no console.

### **Sugestões de implementação**

- Use o operador `|` para declarar a variável com múltiplos tipos (`number | string`).
- Primeiro, atribua um valor numérico e exiba no console.
- Depois, atribua um valor string e também exiba no console.
- Utilize `console.log` para mostrar os dois resultados.*/

function tipoDeNumero(numero: number | string) {
    console.log(`O número é ${numero}`)
}
tipoDeNumero(19)
tipoDeNumero("dezenove");


//RESOLUÇÃO DO PROF: 
/* let identificador: number | string

identificador = 123
console.log(`Identificador numérico: ${identificador}`)

identificador = 'ABC123'
console.log(`Identificador string: ${identificador}`) */