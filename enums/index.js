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
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function responderEmail(recipient, userResponse) {
    //...salvar no banco se o usuário respondeu ou não
}
responderEmail("Jaqueline", UserResponse.Yes);
