import { paginationPerPage, Customer } from './customer';

interface SpecialCustomer extends Customer {
    couponQuantity: number;
}

const specialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name: "Jaque",
    age: 20,
}