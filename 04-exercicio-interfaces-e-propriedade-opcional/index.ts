//1. Exercício sobre Interface:
//**Objetivos do exercício**
//- Criar uma interface para tipar objetos em TypeScript.
//- Definir corretamente as propriedades e seus respectivos tipos.
//- Criar um objeto baseado na interface.
//- Exibir as informações no console.

//**Sugestões de implementação**
//- Use a palavra-chave `interface` para declarar a tipagem.
//- Defina as propriedades `id` (number), `name` (string) e `email` (string).
//- Crie um objeto seguindo a estrutura da interface `User`.
//- Utilize `console.log` para exibir cada propriedade no console.

interface User {
    id: number;
    name: string;
    email: string;
}


const newUser: User = {
    id: 19,
    name: "Jaque",
    email: "teste@gmail.com"
}

console.log(`o id do usuário é ${newUser.id}`)
console.log(`o name do usuário é ${newUser.name}`)
console.log(`o email do usuário é ${newUser.email}`)












//2. Exercício sobre propriedade opcional: