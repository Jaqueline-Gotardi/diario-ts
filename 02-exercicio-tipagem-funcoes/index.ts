/* # Exercício - Tipagem de funções em TypeScript

Neste exercício, você vai praticar a **declaração de funções** com **tipagem explícita** em **TypeScript**, garantindo mais segurança e clareza no seu código. O desafio consiste em criar uma função que receba parâmetros numéricos, realize uma operação simples e retorne o resultado corretamente tipado.

### **Objetivos do exercício**

- Criar uma função em TypeScript com parâmetros tipados.
- Definir explicitamente o tipo de retorno da função.
- Realizar a soma de dois números.
- Exibir o resultado no console.

### **Sugestões de implementação**

- Utilize `: number` para tipar os parâmetros da função.
- Defina também o tipo de retorno como `: number`.
- Chame a função passando dois números inteiros de sua escolha.
- Use `console.log` para mostrar o resultado da soma.*/

function declararNumber(number1: number, number2: number) : number {
    return number1 + number2;
}
const resultado = declararNumber(10, 20)
console.log(resultado)