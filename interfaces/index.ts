//usando interface
interface ICustomer {
    name: string;
    age: number;
}

interface IAddress {
    street: string;
}

//a Interface "herda" as outras
interface ICustomerProfile extends ICustomer, IAddress {}

const newProfile: ICustomerProfile = {
    name: "Jaque",
    age: 19,
    street: "Rua XYZ"
}







//veja a diferença pro type...:
type TCustomer = {
    name: string;
    age: number;
}

type TAddress = {
    street: string;
}

//o Type junta tudo com o &
type TCustomerProfile = TCustomer & TAddress;

const newProfile2: TCustomerProfile = {
    name: "Jaque",
    age: 19,
    street: "Rua XYZ"
}