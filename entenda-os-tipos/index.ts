/* let nome: string = "Jaque" //texto
let idade: number = 19; //números
let mandouEmail: boolean = true; //booleanos => verdadeiro ou falso */

/* let idades: number[] = [12, 22, 39]; //números
let nomes: string[] = [ "Jaque", "Ribeiro", "Gotardi"] //nomes
let idades: Array<number> = [12, 22, 39] //generics para arrays de números
let obj: any = {x:0}; //any significa "qualquer tipo", mas não é mto recomendável usar! */

function imprmirCoordenadas(pt: { x:number; y:number }) { //pt => parâmetro
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
imprmirCoordenadas({x: 3, y: 7})

let obj: { x:number; y:number } = { x:3, y:7};