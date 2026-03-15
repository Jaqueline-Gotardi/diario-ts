/* enum Colors {
    //Red = 1, //caso não queira iniciar o enum com valor 0, é possível atribuir um novo valor
    Red,
    Blue,
    Green,
}



// function showColor(color) {
    //console.log(color)
//}
//showColor(Colors.Blue) //exibe vermelho 


//PODEMOS PERCORRER O ENUM USANDO O FOR (EXIBE TODOS OS VALORES)
for (const key in Colors) {
    console.log(key)
} */


//OUTRO EXEMPLO
/* enum UserResponse {
    No = 0,
    Yes = 1,
}    

function responderEmail(recipient: string, userResponse: UserResponse): void {
    //...salvar no banco se o usuário respondeu ou não
} 
responderEmail("Jaqueline", UserResponse.Yes) */


//ATRBUIR VALORES PARA CADA ELEMENTO
/* enum TradeType {
    ACAO = 9281,
    TESOURO_DIRETO = 3221,
    TESOURO_SELIC = 6554,
}
saveTrade(TradeType.TESOURO_DIRETO) */



//PARA STATUS CODE
/* enum StatusCodes {
    OK = 200,
    BadRequest = 400,
}
StatusCodes.OK */



//PARA GENÊROS
/* enum Gender {
    M = "Masculino",
    F = "Feminino",
} */


//BUSCAR VALORES DE UM ENUM
enum StatusCodes {
    OK = 200,
    BadRequest = 400,
}   

const ok = StatusCodes.OK; //200
const indexOk = StatusCodes["OK"]; //200
const stringBadRequest = StatusCodes[400]; //BadRequest