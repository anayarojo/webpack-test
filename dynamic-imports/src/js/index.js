import "../css/estilos.css";
import message from "./message.js";
import { lastMessage} from "./message.js";
import wmsIcono from "../img/wms-icono.png";
import platziVideo from "../videos/platzi.mp4";
import data from "./teachers.json";
import renderToDom from "./render-to-dom.js";

import React from "react";
import { render } from "react-dom";
import Teachers from "./components/teachers.js";
import "../css/main.less";

const $button = document.getElementById("dynamic-import");
$button.addEventListener("click", async ()=>{
    const {default: alerta} = await import("./alerta.js");
    alerta();
})

render(<Teachers data={data} />, document.getElementById("container"));

console.log(data);

data.teachers.forEach((teacher) => {
    const element = document.createElement("li");
    element.textContent = teacher.name;
    renderToDom(element);
});

document.write("Probando Web Pack!");
document.write("<br/>")
document.write(message.firstMessage);
lastMessage();

document.write("<br/>")

const img = document.createElement("img");
img.setAttribute("src", wmsIcono);
img.setAttribute("width", 60);
img.setAttribute("height", 60);
document.body.appendChild(img);

/*
const video = document.createElement("video");
video.setAttribute("src", platziVideo);
video.setAttribute("width", 480);
video.setAttribute("autoplay", true);
video.setAttribute("controls", true);
document.body.appendChild(video);
*/

console.log("Probando Webpack!");

