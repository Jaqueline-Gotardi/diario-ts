function sendMessage(username: string, isLogged: boolean) {
    console.log(`Olá ${username}. Você ${!isLogged? "não" : ""} pode logar.`)
}

const userName = "Jaque"
const isLogged = true
sendMessage(userName, isLogged)