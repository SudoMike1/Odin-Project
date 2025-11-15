const container = document.querySelector("#container");

const p = document.createElement("p")
p.textContent = "I am red";
p.style.color = "red";

const h3 = document.createElement("h3")
h3.textContent = "I am blue";
h3.style.color = "blue"


const div = document.createElement("div")
div.style.border = "2px black solid";
div.style.backgroundColor = "pink";


const h1 = document.createElement("h1");
h1.textContent = " I am in a div"

const p2 = document.createElement("p")
p2.textContent = "Me too";
div.appendChild(h1)
div.appendChild(p2)


container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

const btn = document.querySelector("#btn")

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
