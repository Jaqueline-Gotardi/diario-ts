//o TS só sabe que é um elemento, mas você avisa que é um BOTÃO
const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", event => {
    //você avisa que o evento é um "evento de mouse" (clique)
    const mouseEvent = event as MouseEvent;
})