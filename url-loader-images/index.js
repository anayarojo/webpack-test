import "./estilos.css";
import message from "./message.js";
import { lastMessage} from "./message.js";
import wmsIcono from "./wms-icono.png";

document.write("Probando Web Pack!");
document.write("<br/>")
document.write(message.firstMessage);
lastMessage();

const img = document.createElement("img");
img.setAttribute("src", wmsIcono);
img.setAttribute("width", 60);
img.setAttribute("height", 60);
document.body.appendChild(img);

console.log("Probando Webpack!");

