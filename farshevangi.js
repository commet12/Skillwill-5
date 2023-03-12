
// I

// const eleqtroshoki = document.getElementById("hider");
// const zgapari = document.getElementById('text');

// eleqtroshoki.addEventListener("click", () => {
//     zgapari.remove()
// })



// II



const div = document.createElement("div");
const a  = document.createElement("a");
const h2  = document.createElement("h2");



div.setAttribute("id", "card");

h2.textContent = "Vaniko";

a.textContent = "Go profile";
a.setAttribute("href", "#");

div.appendChild(h2);
div.appendChild(a);

document.body.appendChild(div)



// III

const backgroundColor = document.getElementById("card");

backgroundColor.style.backgroundColor = "red";





