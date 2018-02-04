import renderToDom from './render-to-dom.js';
import makeMessage from "./make-message.js";

const waitTime = new Promise((good, bad) => {
    setTimeout(()=>{
        good("La operación se ha realizado correctamente.");
    }, 1000);
});

module.exports = {
    firstMessage: "Probando los modulos",
    lastMessage: async () => {
        const message = await waitTime ;
        renderToDom(makeMessage(message));
    }
}