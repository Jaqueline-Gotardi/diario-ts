/* # Exercício - Usando Enums em TypeScript

Neste exercício, você vai praticar o uso de **Enums** em **TypeScript**, que servem para representar um conjunto fixo de valores nomeados, deixando o código mais legível e organizado. O desafio consiste em criar um enum para representar o status de um pedido e exibir um desses valores no console.

### **Objetivos do exercício**

- Criar um enum em TypeScript.
- Definir valores fixos dentro do enum.
- Utilizar uma variável para armazenar um valor do enum.
- Exibir esse valor no console.

### **Sugestões de implementação**

- Use a palavra-chave `enum` para declarar o enumerador.
- Defina os valores `Pendente`, `Pago` e `Enviado` como strings.
- Crie uma variável tipada como `StatusPedido` e atribua um dos valores do enum.
- Use `console.log` para imprimir o valor escolhido no console.
*/


/* enum StatusPedido {
    Pendente = "Pendente", 
    Pago = "Pago", 
    Enviado = "Enviado", 
}
var StatusAtual: StatusPedido = StatusPedido.Pago
console.log(`Status do pedido ${StatusAtual}`) */

//----------------------------------------------------------------------------


//Exercício 2
enum MetodoPagamento {
    Pix = "Pix",
    Credito = "Credito",
    Debito = "Debito",
}
var PagamentoEscolhido : MetodoPagamento = MetodoPagamento.Pix
console.log(`O método de pagamento é ${PagamentoEscolhido}`)