type Customer = {
    firstName: string;
    lastName?: string; //o "?" diz que pode ou não ter sobrenome
    age: number;
}
//assim o TS aceita sem reclamar do lastName!
const newCustomer: Customer = {
    firstName: "Jaque",
    age: 19
}
console.log(newCustomer);



function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é: ${firstName}`);
    console.log(`O último nome é: ${lastName}`);
}
printName("Jaque"); //pode passar só o firstName pq o lastName não é obrigatório!