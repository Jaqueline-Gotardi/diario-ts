function sendMessage(username, isLogged) {
    console.log("Ol\u00E1 ".concat(username, ". Voc\u00EA ").concat(!isLogged ? "não" : "", " pode logar."));
}
var userName = "Jaque";
var isLogged = true;
sendMessage(userName, isLogged);
